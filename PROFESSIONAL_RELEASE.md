# Bernadya HRIS — Professional Release Gate

## Baseline

- Application version: **57.1.3**
- Active Android baseline: **V59**
- Frontend: React + TypeScript + Vite
- Backend: Supabase
- Mobile delivery: PWA + Capacitor-ready
- Primary locale: Indonesian

## Release principles

1. Security before convenience.
2. HRIS data is never cached by the PWA service worker.
3. Authorization is enforced by the backend/RLS, not by hidden frontend controls.
4. UI changes must preserve keyboard access and reduced-motion support.
5. Production builds must be verified with Node 24.x.
6. Historical release notes live under `docs/archive/release-history/`.

## Current release gates

- Static structure audit: PASS
- Translation audit: PASS
- Theme audit: PASS
- PWA/mobile audit: PASS
- Professional release audit: PASS/WARN review
- Production build: requires a clean Node 24.x dependency install

## Remaining verification

- Complete end-to-end tests against a staging Supabase project.
- Validate RLS and storage policies with non-admin test accounts.
- Produce signed Android/iOS release builds only after device testing.
