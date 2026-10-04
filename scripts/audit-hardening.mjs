import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = [];
const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const manifestPath = 'android/app/src/main/AndroidManifest.xml';
if (!exists(manifestPath)) fail.push('AndroidManifest.xml is missing.');
else {
  const manifest = read(manifestPath);
  if (!/android:allowBackup="false"/.test(manifest)) fail.push('Android backup must be disabled.');
  if (/androidx\.core\.content\.FileProvider|android:name="androidx\.core\.content\.FileProvider"/.test(manifest)) fail.push('Unused FileProvider declaration remains in AndroidManifest.xml.');
  if (!/android:dataExtractionRules="@xml\/data_extraction_rules"/.test(manifest)) fail.push('Android data extraction rules are not wired.');
  if (!/android:usesCleartextTraffic="false"/.test(manifest)) fail.push('Android cleartext traffic must be explicitly disabled.');
}
if (exists('android/app/src/main/res/xml/file_paths.xml')) fail.push('Legacy broad FileProvider path file remains.');
if (!exists('ios/App/App/PrivacyInfo.xcprivacy')) fail.push('iOS PrivacyInfo.xcprivacy is missing.');
else {
  try { const xml = read('ios/App/App/Info.plist'); if (!xml.includes('<key>NSCameraUsageDescription</key>') || !xml.includes('<key>UIApplicationSceneManifest</key>')) fail.push('iOS Info.plist is missing required camera or scene configuration.'); } catch { fail.push('iOS Info.plist cannot be read.'); }
}
if (exists('ios/App/App.xcodeproj/project.pbxproj') && !read('ios/App/App.xcodeproj/project.pbxproj').includes('PrivacyInfo.xcprivacy')) fail.push('PrivacyInfo.xcprivacy is not referenced by the iOS project.');
if (!exists('.github/workflows/ci.yml')) fail.push('CI workflow is missing.');
if (!exists('supabase/migrations/20261004141736_015_policy_and_function_execution_hardening.sql')) fail.push('Policy/function hardening migration is missing.');
if (!exists('supabase/migrations/20261004142654_020_account_identity_linking_hardening.sql')) fail.push('Account identity hardening migration is missing.');
if (!exists('supabase/migrations/20261004143154_021_karyawan_auth_identity_constraint.sql')) fail.push('Karyawan auth identity constraint migration is missing.');

const offline = read('src/lib/androidOfflineAttendance.ts');
if (/localStorage\.setItem\(/.test(offline)) fail.push('Offline attendance source writes sensitive data to localStorage.');
if (!/name: 'AES-GCM'/.test(offline) || !/subtle\.generateKey/.test(offline)) fail.push('Offline attendance encrypted storage is missing.');
if (!/false,\s*\['encrypt', 'decrypt'\]/.test(offline)) fail.push('Offline encryption key must be non-extractable.');
if (!/auth_user_id/.test(offline)) fail.push('Offline queue is not bound to auth_user_id.');

const update = read('src/lib/app-update.ts');
if (!/hostname !== 'github\.com'/.test(update) || !/release\.html_url/.test(update)) fail.push('App updater does not enforce trusted GitHub release navigation.');

const app = read('src/App.tsx');
if (/from ['"].*loading-real-final-v57\.15['"]/.test(app) || /installLoadingStyles\(\)/.test(app)) fail.push('Loading stylesheet is initialized twice between main bootstrap and App.');

const language = read('src/locales/LanguageContext.tsx');
if (/^\s{4}useEffect\(/m.test(language)) fail.push('Nested useEffect detected in LanguageContext.');
if (!/document\.documentElement\.lang = lang/.test(language)) fail.push('Document language attribute is not synchronized.');

const rlsSql = read('supabase/migrations/20261004141736_015_policy_and_function_execution_hardening.sql');
const identitySql = read('supabase/migrations/20261004142654_020_account_identity_linking_hardening.sql');
const identityConstraintSql = read('supabase/migrations/20261004143154_021_karyawan_auth_identity_constraint.sql');
const tables = [
  'hris_attendance_adjustments_v24','hris_attendance_calculations_v24','hris_holidays_v24',
  'hris_payroll_statutory_rules','hris_payroll_statutory_snapshots','hris_payroll_tax_reconciliations',
  'hris_shift_assignments_v24','hris_shift_definitions'
];
for (const table of tables) {
  if (!new RegExp(`create policy [^\n]+\\s+on public\\.${table}\\s+for`).test(rlsSql)) fail.push(`RLS policy is missing for ${table}.`);
}
for (const stmt of [
  'revoke execute on function public.hris_my_role() from public,anon;',
  'revoke execute on function public.handle_new_auth_user() from public,anon,authenticated;',
  'revoke all on function public.hris_claim_employee_account() from public,anon;',
  'revoke execute on function public.hris_notify(text,text,text,text,text) from authenticated;'
]) {
  if (!rlsSql.includes(stmt) && !identitySql.includes(stmt)) fail.push(`Execution revoke missing: ${stmt}`);
}
if (!identitySql.includes('create or replace function public.hris_claim_employee_account()')) fail.push('Server-side employee account claim function is missing.');
if (!identityConstraintSql.includes('fk_karyawan_auth_user_id')) fail.push('Karyawan auth identity foreign key is missing.');
if (!exists('supabase/migrations/20261004143407_022_remove_duplicate_karyawan_auth_index.sql')) fail.push('Duplicate karyawan auth index cleanup migration is missing.');

for (const f of fs.readdirSync(root)) {
  if (/\.git|node_modules|dist/.test(f)) continue;
}

if (fail.length) {
  console.error('Hardening audit FAILED');
  for (const item of fail) console.error(`FAIL: ${item}`);
  process.exit(1);
}
console.log(`Hardening audit passed: Android/iOS, auth/offline storage, updater, i18n runtime, CI, and ${tables.length} enterprise RLS tables.`);
