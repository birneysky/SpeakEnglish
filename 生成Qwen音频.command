#!/bin/bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
PYTHON_BIN="$(command -v python3.12 || true)"
if [ -z "$PYTHON_BIN" ] && [ -x /opt/homebrew/bin/python3.12 ]; then
  PYTHON_BIN="/opt/homebrew/bin/python3.12"
fi

if [ -z "$PYTHON_BIN" ] || ! "$PYTHON_BIN" -c 'import mlx_audio' >/dev/null 2>&1; then
  echo "尚未安装 Qwen 语音工具。请先双击“安装Qwen语音工具.command”。"
  read -n 1 -s -r -p "按任意键关闭"
  exit 1
fi

cd "$BASE_DIR"
"$PYTHON_BIN" tools/generate_qwen_audio.py "$@"

echo
echo "完成。重新打开 index.html 即可播放 Qwen3-TTS 音频。"
read -n 1 -s -r -p "按任意键关闭"
