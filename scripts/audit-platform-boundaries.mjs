import fs from 'node:fs';

const main = fs.readFileSync('src/main.tsx', 'utf8');
const background = fs.readFileSync('src/components/karyawan/dashboard/AndroidCosmicBackground.tsx', 'utf8');
const registration = fs.readFileSync('src/components/karyawan/profile/RegistrasiKaryawan.tsx', 'utf8');
const failures = [];

if (/import ['"]\.\/styles\/android-(?:cosmic-background|login-profile-polish)\.css['"]/.test(main)) {
  failures.push('Native-only stylesheet is statically imported into the main web entrypoint.');
}
if (!/if \(platform !== 'web'\)\s*\{[\s\S]*import\('\.\/styles\/android-cosmic-background\.css'\)/.test(main)) {
  failures.push('Android/iOS cosmic background CSS is not loaded through the native-only boundary.');
}
if (!/if \(platform !== 'web'\)\s*\{[\s\S]*import\('\.\/styles\/android-login-profile-polish\.css'\)/.test(main)) {
  failures.push('Android/iOS profile polish CSS is not loaded through the native-only boundary.');
}
if (!/const isWeb = Capacitor\.getPlatform\(\) === 'web'/.test(background)) {
  failures.push('AndroidCosmicBackground is missing the web-platform guard.');
}
if (!/if \(isWeb\) return;/.test(background)) {
  failures.push('AndroidCosmicBackground can still run native side effects on web.');
}
if (/className=["'`]registration-page pt-cosmic-register/.test(registration)) {
  failures.push('Registration page still hard-codes the Android cosmic class for all platforms.');
}

if (failures.length) {
  console.error('Platform-boundary audit FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Platform-boundary audit passed: native CSS and cosmic background are isolated from web.');
