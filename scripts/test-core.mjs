import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const fail = message => { console.error(`TEST FAIL: ${message}`); process.exit(1); };

const pkg = JSON.parse(read('package.json'));
if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) fail(`invalid package version ${pkg.version}`);

const translations = read('src/locales/translations.ts');
const locales = ['id', 'en', 'ja', 'ko', 'zh'];
const blocks = Object.fromEntries(locales.map((locale, index) => {
  const start = translations.indexOf(`  ${locale}: {`);
  const next = locales.slice(index + 1).map(x => translations.indexOf(`  ${x}: {`)).find(x => x >= 0);
  const end = next >= 0 ? next : translations.length;
  const block = translations.slice(start, end);
  return [locale, new Set([...block.matchAll(/^    ([A-Za-z0-9_]+):/gm)].map(m => m[1]))];
}));
const base = blocks.id;
for (const locale of locales) {
  if (blocks[locale].size !== base.size) fail(`${locale} translation key count differs`);
  for (const key of base) if (!blocks[locale].has(key)) fail(`${locale} missing ${key}`);
}

const languageContext = read('src/locales/LanguageContext.tsx');
const effectBodies = [...languageContext.matchAll(/useEffect\s*\(\s*\(.*?\n\s*\},\s*\[[^\]]*\]\);/gs)].length;
if (languageContext.slice(languageContext.indexOf('export function LanguageProvider')).includes('useEffect(() => {\n    //')) {
  // No-op: guard is intentionally based on the source layout checks below.
}
if (/useEffect\s*\([^)]*\{[\s\S]*?useEffect\s*\(/m.test(languageContext)) fail('nested useEffect detected in LanguageContext');

const sourceRoot = path.join(root, 'src');
const nativeDialog = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) {
      const text = fs.readFileSync(full, 'utf8');
      if (/window\.(alert|confirm|prompt)\s*\(/.test(text)) nativeDialog.push(path.relative(root, full));
    }
  }
}
walk(sourceRoot);
if (nativeDialog.length) fail(`native dialogs remain: ${nativeDialog.join(', ')}`);

if (fs.existsSync(path.join(root, 'tirta-backups'))) fail('release tree still contains tirta-backups');
if (fs.existsSync(path.join(root, 'src/components/admin-android'))) fail('stale admin-android synthetic source tree remains');
if (!fs.existsSync(path.join(root, 'ios/App/App/PrivacyInfo.xcprivacy'))) fail('iOS privacy manifest missing');
if (read('vite.config.ts').includes('src/components/admin-android')) fail('vite still references nonexistent admin-android');
if (!read('src/web/webI18n.ts').includes("from '../locales/translations'")) fail('web i18n is not canonical');

console.log('Core tests passed.');
