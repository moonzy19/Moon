# Android V58 — Compact Home, Menu Pages, and Super Admin Theme Sync

- Android Home is compact: employee name first, secure attendance action next, menu grid below.
- Absensi menu is history-only; secure Check In/Out remains on Home.
- Menu is a dedicated bottom-navigation page using the same themed feature grid as Home.
- No nested card pattern is introduced in the Home/feature menu.
- Android login polls `hris_get_public_app_theme()` so the login theme follows the Super Admin's portal theme.
- Web/PWA rendering remains outside the Android-only `.pt-cosmic-shell` scope.
