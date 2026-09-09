const fs = require('fs');
const vm = require('vm');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(projectRoot, 'app.js'), 'utf8');
const prefix = 'const lessons = ';
const suffix = '\n];\n\nlessons.forEach';
const start = source.indexOf(prefix);
const end = source.indexOf(suffix, start);

if (start < 0 || end < 0) {
  throw new Error('无法从 app.js 找到课程数据。');
}

const arrayLiteral = source.slice(start + prefix.length, end + 2);
const lessons = vm.runInNewContext(`(${arrayLiteral})`, Object.create(null), {timeout: 1000});

process.stdout.write(JSON.stringify(lessons.map((lesson, lessonIndex) => ({
  lesson: lessonIndex + 1,
  title: lesson.title,
  zhTitle: lesson.zhTitle,
  intro: lesson.intro,
  lines: lesson.lines.map(([speaker, english, chinese], lineIndex) => ({
    line: lineIndex + 1,
    speaker,
    english,
    chinese
  }))
})), null, 2));
