import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const forbiddenCssPriority = ['!', 'important'].join('');
const forbiddenSetPropertyPriority = /\.setProperty\s*\([^\n;]*,[^\n;]*,[^\n;]*['"]important['"]\s*\)/i;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(rel));
    else out.push(rel);
  }
  return out;
}

const files = walk('.').filter((file) =>
  /\.(css|scss|sass|ts|tsx|mjs|html)$/.test(file),
);

for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  if (source.includes(forbiddenCssPriority)) {
    failures.push(`${file}: forbidden CSS priority declaration remains.`);
  }
  if (forbiddenSetPropertyPriority.test(source)) {
    failures.push(`${file}: runtime style.setProperty(..., priority) uses the forbidden priority argument.`);
  }
}

if (failures.length) {
  console.error('CSS cascade audit FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`CSS cascade audit passed: ${files.length} source/config files contain no forbidden priority declarations.`);
