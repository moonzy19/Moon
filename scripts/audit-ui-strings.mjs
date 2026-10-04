import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const allow = new Set([
  'Ctrl + K',
  'BCA', 'Mandiri', 'BNI', 'BRI',
  'GPS', 'THR', 'ENTERPRISE',
]);
const translationSource = fs.readFileSync(path.join(root, 'src/locales/translations.ts'), 'utf8');
const values = new Set();
for (const match of translationSource.matchAll(/:\s*['"]((?:\\.|[^'"])*)['"]/g)) {
  values.add(match[1].replace(/\\(['"])/g, '$1').replace(/\s+/g, ' ').trim().toLocaleLowerCase());
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.tsx$/.test(entry.name)) out.push(full);
  }
  return out;
}

for (const file of walk(path.join(root, 'src'))) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    const match = line.match(/>\s*([^<>{}\n]+?)\s*</);
    if (!match) return;
    const value = match[1].replace(/\s+/g, ' ').trim();
    if (value.length < 2 || !/[A-Za-zÀ-ÿ一-龯ぁ-ゔ가-힣]/.test(value)) return;
    if (allow.has(value)) return;
    if (values.has(value.toLocaleLowerCase())) return;
    if (/(className|useState|useMemo|useRef|function\s|const\s|return(?:\s|$)|=>|import\s|export\s|Promise|String\(|http|rgb\(|var\(|linear-gradient|grid-template|font-size|color:)/.test(value)) return;
    failures.push(`${path.relative(root, file)}:${index + 1}: ${value}`);
  });
}

if (failures.length) {
  console.error(`UI string audit FAILED: ${failures.length} unmapped literal(s).`);
  failures.slice(0, 100).forEach((x) => console.error(`FAIL: ${x}`));
  process.exit(1);
}
console.log('UI string audit passed: all detected visible literals are translation-backed or explicitly technical/proper-name allowlisted.');
