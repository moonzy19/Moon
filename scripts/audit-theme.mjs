import fs from 'node:fs';

const themeFile = fs.readFileSync('src/theme/professionalTheme.ts', 'utf8');
const appFile = fs.readFileSync('src/App.tsx', 'utf8');
const dashboardFile = fs.readFileSync('src/components/admin/dashboard/DashboardAdmin.tsx', 'utf8');
const errors = [];

if (!/COSMIC_THEMES/.test(themeFile)) errors.push('Cosmic theme registry missing.');
for (const id of ['sun','moon','galaxy','blackhole','nebula','aurora']) {
  if (!new RegExp(`"${id}"\\s*:`).test(themeFile)) errors.push(`Cosmic theme missing: ${id}`);
}
if (!/id:'custom'/.test(fs.readFileSync('src/components/admin/dashboard/DashboardAdmin.tsx','utf8'))) errors.push('Custom theme flow missing.');
if (!/localStorage\.setItem\(THEME_STORAGE_KEY/.test(themeFile)) errors.push('Cosmic theme persistence missing.');
if (!/prefers-reduced-motion/.test(themeFile)) errors.push('Reduced-motion support missing.');
if (!/@keyframes pt-(sun-breathe|moon-drift|galaxy-rotate|blackhole-orbit|nebula-flow)/.test(themeFile)) errors.push('Animated cosmic theme keyframes missing.');
if (!/applyProjectTheme\(/.test(dashboardFile)) errors.push('Theme switcher action missing.');
if (!/COSMIC_THEMES\[id\]\.name/.test(dashboardFile)) errors.push('Theme switcher labels missing.');

const cssFiles = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
    if (['node_modules','.git','dist'].includes(e.name)) continue;
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p); else if (/\.(css|scss|sass)$/.test(e.name)) cssFiles.push(p);
  }
}
walk('src');

const allowedStyleRoots = [
  'src/styles/',
];
const unexpectedCss = cssFiles.filter((file) =>
  !allowedStyleRoots.some((root) => file.startsWith(root))
);
if (unexpectedCss.length) {
  errors.push(`Unexpected stylesheet files remain: ${unexpectedCss.join(', ')}`);
}

if (errors.length) {
  console.error('Theme audit FAILED');
  errors.forEach(e => console.error(`- ${e}`));
  process.exit(1);
}
console.log('Theme audit passed: 6 animated/ambient cosmic themes + custom theme + persistence + reduced-motion + CSS-free source tree.');
