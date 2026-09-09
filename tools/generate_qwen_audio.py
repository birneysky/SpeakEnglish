#!/usr/bin/env python3
"""Generate per-line offline lesson audio with Qwen3-TTS VoiceDesign on Apple Silicon."""

from __future__ import annotations

import argparse
import json
import math
import platform
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MODEL = "mlx-community/Qwen3-TTS-12Hz-1.7B-VoiceDesign-4bit"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="使用 Qwen3-TTS 为课程生成逐句 AI 语音。")
    parser.add_argument("--lesson", type=int, action="append", help="只生成指定课，可重复传入。")
    parser.add_argument("--speaker", action="append", help="只生成指定角色，可重复传入，例如 --speaker Mia。")
    parser.add_argument("--overwrite", action="store_true", help="覆盖已经存在的音频。")
    parser.add_argument("--dry-run", action="store_true", help="只列出生成任务，不加载模型。")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="MLX-Audio 模型名称或本地路径。")
    parser.add_argument("--output", type=Path, default=PROJECT_ROOT / "assets" / "audio")
    return parser.parse_args()


def load_lessons() -> list[dict]:
    node = shutil.which("node")
    if not node:
        raise RuntimeError("未找到 Node.js，无法读取 app.js 中的课程台词。")
    result = subprocess.run(
        [node, str(PROJECT_ROOT / "tools" / "export_lessons.cjs")],
        cwd=PROJECT_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def load_profiles() -> dict:
    return json.loads((PROJECT_ROOT / "qwen_voices.json").read_text(encoding="utf-8"))


def output_path(output_dir: Path, lesson_no: int, line_no: int) -> Path:
    return output_dir / f"lesson-{lesson_no:02d}" / f"line-{line_no:02d}.m4a"


def select_jobs(
    lessons: list[dict],
    requested: list[int] | None,
    speakers: list[str] | None,
    output_dir: Path,
    overwrite: bool,
) -> list[dict]:
    wanted = set(requested or range(1, len(lessons) + 1))
    wanted_speakers = set(speakers or [])
    invalid = sorted(wanted - set(range(1, len(lessons) + 1)))
    if invalid:
        raise ValueError(f"课程编号不存在：{', '.join(map(str, invalid))}")
    jobs = []
    for lesson in lessons:
        if lesson["lesson"] not in wanted:
            continue
        for line in lesson["lines"]:
            if wanted_speakers and line["speaker"] not in wanted_speakers:
                continue
            target = output_path(output_dir, lesson["lesson"], line["line"])
            if target.exists() and not overwrite:
                continue
            jobs.append({**line, "lesson": lesson["lesson"], "title": lesson["title"], "target": target})
    return jobs


def convert_to_m4a(wav_path: Path, target: Path) -> None:
    afconvert = shutil.which("afconvert")
    ffmpeg = shutil.which("ffmpeg")
    target.parent.mkdir(parents=True, exist_ok=True)
    if afconvert:
        subprocess.run(
            [afconvert, str(wav_path), str(target), "-f", "m4af", "-d", "aac", "-q", "127"],
            check=True,
            capture_output=True,
        )
        return
    if ffmpeg:
        subprocess.run(
            [ffmpeg, "-v", "error", "-y", "-i", str(wav_path), "-c:a", "aac", "-b:a", "128k", str(target)],
            check=True,
        )
        return
    raise RuntimeError("未找到 afconvert 或 ffmpeg，无法生成网页使用的 M4A 文件。")


def normalize_audio(audio):
    import numpy as np

    waveform = np.asarray(audio, dtype=np.float32).squeeze()
    if waveform.ndim != 1 or waveform.size == 0:
        raise RuntimeError("模型返回了空音频或不支持的音频形状。")
    waveform = np.nan_to_num(waveform)
    peak = float(np.max(np.abs(waveform)))
    if not math.isfinite(peak) or peak <= 0:
        raise RuntimeError("模型返回了无效音频。")
    return waveform * min(1.0, 0.95 / peak)


def main() -> int:
    args = parse_args()
    if platform.machine() != "arm64":
        raise RuntimeError("此生成器使用 MLX，只支持 Apple Silicon Mac。")
    lessons = load_lessons()
    profiles = load_profiles()
    jobs = select_jobs(lessons, args.lesson, args.speaker, args.output, args.overwrite)

    print(f"模型：{args.model}")
    print(f"待生成：{len(jobs)} 句；输出目录：{args.output}")
    for job in jobs:
        print(f"  {job['target'].relative_to(args.output)}  [{job['speaker']}] {job['english']}")
    if args.dry_run or not jobs:
        return 0

    try:
        import mlx.core as mx
        import numpy as np
        import soundfile as sf
        from mlx_audio.tts.utils import load_model
    except ImportError as exc:
        raise RuntimeError("缺少生成依赖。请先双击“安装Qwen语音工具.command”。") from exc

    print("正在加载 Qwen3-TTS；首次运行会下载约 2.3 GB 模型……")
    model = load_model(args.model)
    generated = []
    args.output.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory(prefix="speakenglish-qwen-") as temp_dir:
        temp_root = Path(temp_dir)
        for index, job in enumerate(jobs, 1):
            profile = profiles.get(job["speaker"], profiles["default"])
            mx.random.seed(int(profile["seed"]))
            print(f"[{index}/{len(jobs)}] {job['target'].name} · {job['speaker']}")
            results = list(model.generate_voice_design(
                text=job["english"],
                language=profiles["_meta"].get("language", "English"),
                instruct=profile["instruct"],
            ))
            if not results:
                raise RuntimeError(f"没有生成音频：{job['target'].name}")
            result = results[0]
            waveform = normalize_audio(result.audio)
            sample_rate = int(getattr(result, "sample_rate", 0) or getattr(model, "sample_rate", 24000))
            wav_path = temp_root / f"{job['target'].stem}.wav"
            sf.write(wav_path, np.asarray(waveform), sample_rate, subtype="PCM_16")
            convert_to_m4a(wav_path, job["target"])
            generated.append({
                "file": str(job["target"].relative_to(args.output)),
                "lesson": job["lesson"],
                "line": job["line"],
                "speaker": job["speaker"],
                "text": job["english"],
                "seed": profile["seed"],
            })

    manifest_path = args.output / "qwen-audio-manifest.json"
    previous_files = []
    if manifest_path.exists():
        try:
            previous_files = json.loads(manifest_path.read_text(encoding="utf-8")).get("files", [])
        except (json.JSONDecodeError, OSError):
            previous_files = []
    merged_files = {item["file"]: item for item in previous_files if "file" in item}
    merged_files.update({item["file"]: item for item in generated})
    manifest = {
        "generator": "Qwen3-TTS VoiceDesign via MLX-Audio",
        "model": args.model,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "files": [merged_files[name] for name in sorted(merged_files)],
    }
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"完成：已生成 {len(generated)} 个本地 AI 音频文件。")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, ValueError, subprocess.CalledProcessError) as exc:
        print(f"错误：{exc}", file=sys.stderr)
        raise SystemExit(1)
