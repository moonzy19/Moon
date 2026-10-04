import fs from 'node:fs';

const failures = [];
const dashboard = fs.readFileSync('src/components/admin/dashboard/DashboardAdmin.tsx', 'utf8');
const migration = fs.readFileSync('supabase/migrations/20261004141634_014_admin_notification_center_and_realtime.sql', 'utf8');
const translations = fs.readFileSync('src/locales/translations.ts', 'utf8');

const events = [
  ['EMPLOYEE_REGISTRATION_NEW', 'employee', 'person'],
  ['FEEDBACK_NEW', 'feedback', 'message'],
  ['LEAVE_REQUEST_NEW', 'leave', 'leave'],
  ['PROFILE_CHANGE_REQUEST_NEW', 'profile', 'person'],
  ['ATTENDANCE_REQUEST_NEW', 'attendance', 'clock'],
  ['OVERTIME_REQUEST_NEW', 'overtime', 'clock'],
  ['CONTRACT_EXPIRING_SOON', 'contract', 'calendar'],
  ['RECRUITMENT_APPLICATION_NEW', 'recruitment', 'recruitment'],
];

for (const [code, type, icon] of events) {
  if (!migration.includes(`'${code}'`)) failures.push(`Migration does not define event code ${code}.`);
  if (!dashboard.includes(`${code}:`)) failures.push(`Dashboard does not map event code ${code}.`);
  if (!dashboard.includes(`type: t('notification_type_${type}')`)) failures.push(`Dashboard does not localize notification type ${type}.`);
  if (!dashboard.includes(`icon: '${icon}'`)) failures.push(`Dashboard does not map icon ${icon} for ${code}.`);
}

const requiredKeys = [
  'notification_center', 'notification_mark_all_read', 'admin_no_notifications', 'admin_view_all_notifications',
  'notification_employee_title', 'notification_employee_message',
  'notification_feedback_title', 'notification_feedback_message',
  'notification_leave_title', 'notification_leave_message',
  'notification_profile_title', 'notification_profile_message',
  'notification_attendance_title', 'notification_attendance_message',
  'notification_overtime_title', 'notification_overtime_message',
  'notification_contract_title', 'notification_contract_message',
  'notification_recruitment_title', 'notification_recruitment_message',
];
for (const key of requiredKeys) {
  const occurrences = (translations.match(new RegExp(`^    ${key}:`, 'gm')) || []).length;
  if (occurrences !== 5) failures.push(`Translation key ${key} occurs ${occurrences} times; expected 5 locales.`);
}

for (const needle of [
  "from('hris_notifications')",
  "from('hris_employee_feedback')",
  'hris_generate_admin_notifications',
  "setNotificationUnread(0)",
  'admin-floating-action-badge',
]) {
  if (!dashboard.includes(needle)) failures.push(`Dashboard notification center is missing ${needle}.`);
}

if (failures.length) {
  console.error('Notification audit FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Notification audit passed: ${events.length} event types, 5 locales, header badges and read controls.`);
