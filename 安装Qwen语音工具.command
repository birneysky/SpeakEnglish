#!/bin/bash
set -euo pipefail

PYTHON_BIN="$(command -v python3.12 || true)"
if [ -z "$PYTHON_BIN" ] && [ -x /opt/homebrew/bin/python3.12 ]; then
  PYTHON_BIN="/opt/homebrew/bin/python3.12"
fi
if [ -z "$PYTHON_BIN" ]; then
  echo "未找到 python3.12。请先运行：brew install python@3.12"
  read -n 1 -s -r -p "按任意键关闭"
  exit 1
fi

echo "使用：$PYTHON_BIN"
"$PYTHON_BIN" -m pip install --user --break-system-packages --upgrade mlx-audio soundfile

echo
echo "安装完成。现在可以在任意目录使用："
echo "python3.12 -m mlx_audio.tts.generate --help"
echo "模型将在第一次生成语音时下载到用户级缓存，供所有项目共用。"
read -n 1 -s -r -p "按任意键关闭"
