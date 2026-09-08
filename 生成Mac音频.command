#!/bin/bash
set -u

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
MANIFEST="$BASE_DIR/audio_manifest.tsv"
OUT_DIR="$BASE_DIR/assets/audio"

mkdir -p "$OUT_DIR"

if ! command -v say >/dev/null 2>&1; then
  echo "未找到 macOS 自带的 say 命令。请在 Mac 上运行此文件。"
  read -n 1 -s -r -p "按任意键关闭"
  exit 1
fi

VOICE_LIST="$(say -v '?')"

pick_voice() {
  locale="$1"
  shift
  for candidate in "$@"; do
    if printf '%s\n' "$VOICE_LIST" | awk -v name="$candidate" -v lang="$locale" '
      index($0, name) == 1 && $0 ~ ("[[:space:]]" lang "[[:space:]]") { found=1 }
      END { exit !found }
    '; then
      printf '%s' "$candidate"
      return
    fi
  done
  printf '%s\n' "$VOICE_LIST" | awk -v lang="$locale" '
    $0 ~ ("[[:space:]]" lang "[[:space:]]") &&
    $0 !~ /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox/ {
      line=$0
      sub("[[:space:]]+" lang ".*$", "", line)
      sub("[[:space:]]+$", "", line)
      print line
      exit
    }
  '
}

# 不再选择列表中的第一个声音；它在不少 Mac 上是机器感很强的 Albert。
# 优先使用自然美式女声和普通话女声，未安装时再回退到非特效声音。
EN_VOICE="$(pick_voice en_US Samantha Shelley 'Sandy (English (US))' 'Flo (English (US))' Kathy)"
ZH_VOICE="$(pick_voice zh_CN Tingting 'Shelley (Chinese (China mainland))' 'Sandy (Chinese (China mainland))' 'Flo (Chinese (China mainland))')"

echo "英文声音：${EN_VOICE:-系统默认}"
echo "中文声音：${ZH_VOICE:-系统默认}"

echo "开始生成课程音频……"
count=0
while IFS=$'\t' read -r filename lang rate text; do
  [ -z "${filename:-}" ] && continue
  [ "${filename:0:1}" = "#" ] && continue
  voice="$EN_VOICE"
  [ "$lang" = "zh" ] && voice="$ZH_VOICE"
  output="$OUT_DIR/$filename"
  temp="$OUT_DIR/.${filename%.m4a}.aiff"
  if [ -n "$voice" ]; then
    say -v "$voice" -r "$rate" -o "$temp" "$text"
  else
    say -r "$rate" -o "$temp" "$text"
  fi
  if command -v afconvert >/dev/null 2>&1; then
    afconvert "$temp" "$output" -f m4af -d aac -q 127 >/dev/null 2>&1
    rm -f "$temp"
  else
    mv "$temp" "${output%.m4a}.aiff"
  fi
  count=$((count + 1))
  echo "[$count/72] $filename"
done < "$MANIFEST"

echo
echo "完成：音频已放入 assets/audio。现在双击 index.html 即可使用。"
read -n 1 -s -r -p "按任意键关闭"
