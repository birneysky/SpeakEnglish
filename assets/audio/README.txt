这里用于存放本地 M4A 课程音频。

主要方案：Qwen3-TTS VoiceDesign
1. 双击课程根目录中的“安装Qwen语音工具.command”。
2. 安装完成后双击“生成Qwen音频.command”。
3. 首次生成会下载约 2.3 GB 模型；以后可以完全离线生成。

生成器会为 Mom、Dad、Mia、Ben、Child 和 Teacher 使用固定的原创角色设定，
并按课程目录输出 lesson-01/line-01.m4a 这样的逐句文件。网页会优先播放这些文件：
- 中文讲解位于 lesson-01/chinese.m4a 这样的对应课程目录中
- 点击一句时播放对应角色音频
- 慢速、情景对话和快速挑战按顺序播放逐句文件
- 文件缺失时使用设备系统声音作为应急回退

Python 3.12 和 MLX-Audio 安装在用户级位置，不创建项目虚拟环境；在任意目录均可使用：
python3.12 -m mlx_audio.tts.generate --help

角色设定保存在项目根目录的 qwen_voices.json，可调整后重新生成。
模型只在制作音频时使用，不会进入最终网页包。

旧的“生成Mac音频.command”仅保留用于生成中文讲解和发音技巧等兼容音频，
不再作为英文情景对话的主要声音来源。
