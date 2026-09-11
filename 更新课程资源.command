#!/bin/bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$BASE_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "未找到 Node.js，无法更新课程资源清单。"
  read -n 1 -s -r -p "按任意键关闭"
  exit 1
fi

node tools/sync_resources.cjs

echo
echo "课程、图片和音频资源已检查，资源清单已更新。"
read -n 1 -s -r -p "按任意键关闭"
