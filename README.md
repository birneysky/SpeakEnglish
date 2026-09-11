# 开口说｜家庭与学校英语口语课

一套面向小学一至二年级零基础儿童的英语口语练习网页。课程围绕家庭和学校中的常见场景展开，通过看图、听音、跟读、角色对话和替换练习，帮助孩子先听懂，再模仿，最后开口表达。

![课程场景示例](assets/images/lesson-01.webp)

## 功能特点

- 12 节家庭与学校主题课程，每课建议学习约 20 分钟
- 中文讲解、发音技巧以及慢速、正常、快速三档跟读模式
- 逐句播放和角色对话，支持停止播放
- 跟读录音、回放自己的声音，再播放原句进行对比；录音只保存在当前浏览器会话
- 句型换词练习，帮助孩子把固定表达迁移到新场景
- 可展开教师提示，查看课堂流程和过关标准
- 支持打印当前课程
- 课程图片统一使用 WebP，加载更快、仓库体积更小
- 自动生成课程资源清单，并在提交代码时检查图片和音频是否完整
- 优先播放项目内置的 Qwen3-TTS 角色音频，缺失时自动回退到浏览器的系统语音

## 课程内容

| 课程 | 场景 | 学习目标 |
| --- | --- | --- |
| 1. Good Morning! | 家庭 · 早晨 | 问候家人并回应自己的状态 |
| 2. Can I Have Some Milk? | 家庭 · 早餐 | 礼貌提出请求并表达感谢 |
| 3. It's Raining Today | 家庭 · 穿衣 | 描述天气并提醒穿戴 |
| 4. Can I Help? | 家庭 · 帮忙 | 主动帮忙并听懂简单家务指令 |
| 5. Where Is My Teddy? | 家庭 · 找东西 | 询问位置并使用方位词回答 |
| 6. How Do You Feel? | 家庭 · 感受 | 询问和表达日常感受 |
| 7. Nice to Meet You | 学校 · 见面 | 介绍姓名并问候新同学 |
| 8. May I Borrow a Pencil? | 学校 · 文具 | 礼貌借用和归还文具 |
| 9. I Don't Understand | 学校 · 求助 | 听不懂时主动请求帮助 |
| 10. Can I Play with You? | 学校 · 课间 | 礼貌加入同伴游戏 |
| 11. What Do You Have for Lunch? | 学校 · 午餐 | 介绍午餐并交流食物喜好 |
| 12. How Was School? | 学校 · 放学 | 简单回顾一天的学校生活 |

## 快速开始

项目是纯静态网页，不需要安装依赖或执行构建。若要使用录音功能，需要通过 localhost 或 HTTPS 打开页面。

### 方法一：直接打开

下载或克隆项目后，可以双击 `index.html` 浏览课程和播放音频，建议使用最新版 Safari、Chrome 或 Edge。浏览器出于安全限制，通过文件直接打开时无法使用麦克风录音。

```bash
git clone https://github.com/SincereCSL/SpeakEnglish.git
cd SpeakEnglish
open index.html
```

Windows 用户可以在文件管理器中直接双击 `index.html`。

### 方法二：启动本地服务器

在项目根目录启动静态服务器后，可使用包括录音在内的全部功能：

```bash
python3 -m http.server 8000
```

然后打开 [http://localhost:8000](http://localhost:8000)。

## 如何使用

1. 在左侧课程目录选择一课，也可以按“家庭”或“学校”筛选。
2. 先观察场景图片，并尝试回答“看图先说”中的问题。
3. 依次播放“中文讲解”和“发音技巧”，了解场景与发音重点。
4. 使用“慢速跟读”“情景对话”和“快速挑战”逐步练习。
5. 点击小对话中的任意句子，单独模仿对应角色的发音。
6. 在“跟读录音，对比发音”中选择句子：先播放原句，再开始录音；孩子读完后停止录音，依次播放自己的录音和原句进行比较。
7. 点击换词卡片，用新词替换句型中的空缺并再次表达。
8. 教学时可打开“教师提示”；需要纸质材料时点击“打印本课”。

第一次录音时，浏览器会申请麦克风权限。录音不会上传，也不会写入项目文件；刷新或关闭页面后会清除。

建议每课按以下节奏进行：看图猜场景 3 分钟、听音模仿 6 分钟、分角色对话 6 分钟、换词表达 5 分钟。

## 音频说明

仓库包含每课的中文讲解和 12 课共 72 句英文角色音频，路径格式如下：

```text
assets/audio/lesson-01/chinese.m4a
assets/audio/lesson-01/line-01.m4a
```

页面播放单句以及慢速、正常、快速对话时，会优先使用这些本地音频。中文讲解或发音技巧等音频不存在时，页面会自动使用设备的系统语音，因此不重新生成音频也可以直接使用课程。

## 课程资源自动更新与检查

这里的“自动更新”指开发阶段在本地同步资源清单和自动检查资源完整性。网页运行时不会联网下载课程，也不会把本地文件上传到服务器，因此仍可完全离线使用。

课程数据、WebP 图片或音频发生变化后，运行：

```bash
npm run resources:update
```

该命令会检查 12 课课程结构、12 张 WebP 场景图、12 段中文讲解和 72 句英文音频，并更新 `assets/resource-manifest.json` 中的文件大小与 SHA-256 摘要。在 macOS 上也可双击 `更新课程资源.command`。

只检查、不修改资源清单时运行：

```bash
npm run resources:check
```

音频生成脚本完成后也会自动更新资源清单；GitHub Actions 会在 PR 和推送到 `main` 时执行同一项检查，避免漏传或错放资源。

具体流程是：以 `app.js` 中的课程数据为源，检查每课对应的 WebP 图片、中文讲解和 6 句英文音频，然后计算文件大小及 SHA-256 摘要并写入资源清单。`resources:check` 只做对比，发现文件缺失、路径错误或摘要过期时返回失败，不会修改课程文件。

### 在 Apple Silicon Mac 上重新生成 Qwen3-TTS 音频

前置条件：

- Apple Silicon Mac
- Python 3.12
- Node.js
- `afconvert`（macOS 自带）或 `ffmpeg`

先双击 `安装Qwen语音工具.command` 安装 MLX-Audio，再双击 `生成Qwen音频.command` 生成缺失的音频。首次运行会下载约 2.3 GB 的模型文件，后续可离线生成。

也可以在终端中执行：

```bash
python3.12 tools/generate_qwen_audio.py
```

常用选项：

```bash
# 查看计划生成的文件，不加载模型
python3.12 tools/generate_qwen_audio.py --dry-run

# 只生成第 1 课
python3.12 tools/generate_qwen_audio.py --lesson 1

# 只生成 Mia 的台词
python3.12 tools/generate_qwen_audio.py --speaker Mia

# 覆盖已有音频
python3.12 tools/generate_qwen_audio.py --overwrite
```

角色声音配置保存在 `qwen_voices.json`。修改后重新运行生成器即可更新相应角色的音频。

`生成Mac音频.command` 使用 macOS 自带语音生成兼容音频，主要用于中文讲解和发音技巧。

## 项目结构

```text
SpeakEnglish/
├── index.html                 # 页面结构
├── styles.css                 # 页面样式与打印样式
├── app.js                     # 课程数据、交互与音频播放
├── assets/
│   ├── images/                # 12 课 WebP 场景图片
│   ├── audio/                 # 本地 M4A 课程音频
│   └── resource-manifest.json # 自动生成的课程资源校验清单
├── tools/
│   ├── export_lessons.cjs     # 从 app.js 导出课程台词
│   ├── sync_resources.cjs     # 检查资源并更新校验清单
│   └── generate_qwen_audio.py # Qwen3-TTS 音频生成器
├── .github/workflows/         # PR 与 main 分支的自动资源检查
├── package.json               # 资源更新与检查命令
├── qwen_voices.json           # 角色声音配置
├── audio_manifest.tsv         # 系统语音音频清单
└── *.command                  # macOS 一键安装与生成脚本
```

## 自定义课程

- 课程内容：编辑 `app.js` 中的 `lessons` 数组。
- 页面样式：编辑 `styles.css`。
- 场景图片：先转换为 WebP，放入 `assets/images/`，并在课程数据中填写对应路径。
- 角色声音：编辑 `qwen_voices.json` 后重新生成音频。

修改课程台词、图片或音频后，运行以下命令同步并验证全部资源：

```bash
npm run resources:update
npm run resources:check
```

## 浏览器兼容性

建议使用最新版 Safari、Chrome 或 Edge。不同系统安装的语音不同，因此回退到系统语音时，音色和发音可能略有差异。麦克风录音需要从 localhost 或 HTTPS 页面访问，并允许浏览器使用麦克风。

## License

当前仓库尚未声明开源许可证。未经作者许可，请勿将代码、图片或音频用于再分发或商业用途。
