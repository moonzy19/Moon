# Project by Tirta — Cosmic V58 Android-only

Cosmic V58 redesign is enabled only when Capacitor reports `android`.

- Android: Cosmic Login + Cosmic Employee Dashboard.
- Web/PWA: keeps the existing employee portal and normal login styling.
- Supabase/backend logic is unchanged by this visual split.
- `PortalKaryawan.tsx` is a platform wrapper selecting the Android and classic implementations.


## V58.5 Home UX
- Home Android-only uses a real-time work-duration progress bar from check-in to current/check-out time.
- Home menu contains six feature icons; Attendance and Profile remain bottom navigation destinations.
- Android cosmic background overlays/blur are disabled for a sharper background.
