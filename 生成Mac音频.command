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

EN_VOICE="$(say -v '?' | awk '$2 ~ /en_US/ {print $1; exit}')"
ZH_VOICE="$(say -v '?' | awk '$2 ~ /zh_CN/ {print $1; exit}')"

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
