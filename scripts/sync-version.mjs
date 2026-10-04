import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;
if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error(`Invalid semver: ${version}`);

const androidVersionCode = version.split('.').map(Number).reduce((n, part, i) => n + part * [1000, 100, 1][i], 0);
const androidPath = path.join(root, 'android/app/build.gradle');
let android = fs.readFileSync(androidPath, 'utf8');
android = android.replace(/versionCode\s+\d+/, `versionCode ${androidVersionCode}`);
android = android.replace(/versionName\s+"[^"]+"/, `versionName "${version}"`);
fs.writeFileSync(androidPath, android);

const iosPath = path.join(root, 'ios/App/App.xcodeproj/project.pbxproj');
let ios = fs.readFileSync(iosPath, 'utf8');
ios = ios.replace(/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${version};`);
ios = ios.replace(/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${androidVersionCode};`);
fs.writeFileSync(iosPath, ios);

console.log(`Synchronized version ${version} (Android/iOS build ${androidVersionCode}).`);
