const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const {execFileSync} = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const manifestPath = path.join(projectRoot, 'assets', 'resource-manifest.json');
const checkOnly = process.argv.includes('--check');
const unknownArgs = process.argv.slice(2).filter(arg => arg !== '--check');

if (unknownArgs.length) {
  console.error(`未知参数：${unknownArgs.join(', ')}`);
  process.exit(1);
}

const lessons = JSON.parse(execFileSync(
  process.execPath,
  [path.join(__dirname, 'export_lessons.cjs')],
  {cwd: projectRoot, encoding: 'utf8'}
));

const errors = [];

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function assetInfo(relativePath) {
  const fullPath = path.resolve(projectRoot, relativePath);
  if (!fullPath.startsWith(`${projectRoot}${path.sep}`)) {
    errors.push(`资源路径超出项目目录：${relativePath}`);
    return {path: relativePath, bytes: 0, sha256: ''};
  }
  if (!fs.existsSync(fullPath)) {
    errors.push(`缺少资源：${relativePath}`);
    return {path: relativePath, bytes: 0, sha256: ''};
  }
  const stat = fs.statSync(fullPath);
  if (!stat.isFile() || stat.size === 0) {
    errors.push(`资源为空或不是文件：${relativePath}`);
    return {path: relativePath, bytes: 0, sha256: ''};
  }
  return {
    path: relativePath,
    bytes: stat.size,
    sha256: sha256(fs.readFileSync(fullPath)),
  };
}

if (lessons.length !== 12) {
  errors.push(`课程数量应为 12，当前为 ${lessons.length}。`);
}

const manifest = {
  version: 1,
  courseSha256: sha256(JSON.stringify(lessons)),
  lessons: lessons.map((lesson, index) => {
    const lessonNo = String(index + 1).padStart(2, '0');
    const lines = Array.isArray(lesson.lines) ? lesson.lines : [];
    if (!lesson.title || !lesson.zhTitle || !lesson.goal || !lesson.intro) {
      errors.push(`第 ${index + 1} 课缺少标题、目标或中文讲解。`);
    }
    if (!Array.isArray(lesson.questions) || lesson.questions.length !== 3) {
      errors.push(`第 ${index + 1} 课应有 3 个“看图先说”问题。`);
    }
    if (lines.length !== 6) {
      errors.push(`第 ${index + 1} 课应有 6 句对话。`);
    }
    lines.forEach((line, lineIndex) => {
      if (!line.speaker || !line.english || !line.chinese) {
        errors.push(`第 ${index + 1} 课第 ${lineIndex + 1} 句缺少角色、英文或中文。`);
      }
    });
    if (!lesson.image || path.extname(lesson.image).toLowerCase() !== '.webp') {
      errors.push(`第 ${index + 1} 课图片不是 WebP：${lesson.image || '未设置'}`);
    }
    return {
      lesson: index + 1,
      title: lesson.title,
      zhTitle: lesson.zhTitle,
      image: assetInfo(lesson.image || ''),
      audio: {
        chinese: assetInfo(`assets/audio/lesson-${lessonNo}/chinese.m4a`),
        lines: lines.map((line, lineIndex) => assetInfo(
          `assets/audio/lesson-${lessonNo}/line-${String(lineIndex + 1).padStart(2, '0')}.m4a`
        )),
      },
    };
  }),
};

if (errors.length) {
  console.error(`课程资源检查失败：\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

const output = `${JSON.stringify(manifest, null, 2)}\n`;

if (checkOnly) {
  if (!fs.existsSync(manifestPath) || fs.readFileSync(manifestPath, 'utf8') !== output) {
    console.error('课程资源清单不是最新状态，请运行：node tools/sync_resources.cjs');
    process.exit(1);
  }
  console.log(`课程资源检查通过：${lessons.length} 课。`);
} else {
  fs.writeFileSync(manifestPath, output, 'utf8');
  console.log(`课程资源清单已更新：${path.relative(projectRoot, manifestPath)}（${lessons.length} 课）。`);
}
