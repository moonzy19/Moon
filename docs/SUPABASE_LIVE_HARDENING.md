# Supabase Live Hardening

This project is synchronized with the connected production Supabase project after the live hardening work completed on 2026-10-04.

## Canonical migrations added

- `20261004141634_014_admin_notification_center_and_realtime.sql`
- `20261004141736_015_policy_and_function_execution_hardening.sql`
- `20261004141818_016_remove_redundant_indexes.sql`
- `20261004141913_017_consolidate_authenticated_rls_policies.sql`
- `20261004142344_018_index_foreign_keys.sql`
- `20261004142420_019_realtime_admin_notification_sources.sql`
- `20261004142654_020_account_identity_linking_hardening.sql`
- `20261004143154_021_karyawan_auth_identity_constraint.sql`

## Notification events

The admin notification center now supports idempotent events for:

- new employee registration
- new employee feedback
- leave / permission requests
- employee profile-change requests
- attendance correction requests
- overtime requests
- contracts expiring within 7 days
- new recruitment applications

`hris_notifications` and `hris_employee_notifications` are enabled for Realtime. Employee and feedback source tables are also in the Realtime publication for immediate badge refreshes.

A daily `pg_cron` job named `hris-contract-expiry-notifications` generates contract-expiry reminders. The schedule is `0 0 * * *` (00:00 UTC / 07:00 Asia/Jakarta).

## Security state verified

- RLS-enabled tables without policies: 0
- Multiple permissive RLS policies: 0
- Duplicate indexes: 0
- Unindexed foreign keys: 0
- Admin notification event de-duplication: verified in a rolled-back transaction
- Notification event end-to-end test: verified in a rolled-back transaction
- `karyawan.auth_user_id` references `auth.users`
- `hris_users.auth_user_id` references `auth.users`

## Intentionally remaining Advisor items

Some SECURITY DEFINER functions remain callable by authenticated users because they are deliberate application RPC endpoints (attendance, approval, payroll, theme, and related authorization helpers). These are guarded by permission or identity checks and should not be revoked blindly.

Two anonymous SECURITY DEFINER functions remain intentionally public:

- `hris_get_public_app_theme()` for public theme bootstrap
- `verify_employee_id_card(text)` for public ID-card verification

Supabase Auth's leaked-password protection is a hosted Auth setting and must be enabled in the Supabase Dashboard under the Email/password Auth settings. The connected MCP surface used here does not expose that Auth-provider toggle.

## Performance Advisor note

The remaining `unused_index` findings are informational. The database currently has little production traffic, so many legitimate indexes have not accumulated usage statistics yet. They are retained rather than removed speculatively. Foreign-key coverage and duplicate-index warnings were cleaned up based on actual catalog inspection.
