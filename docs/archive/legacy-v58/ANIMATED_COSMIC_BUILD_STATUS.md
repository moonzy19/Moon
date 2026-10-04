# Build Status — Animated Cosmic Theme

Static theme/presentation/release audits pass.

The full production build was attempted in the inspection environment but cannot complete because the environment has no installed `node_modules` and npm registry access is unavailable there. The source-level theme file was checked successfully with the installed TypeScript compiler using DOM/ES2022 libs.

Run on Termux in the project root:

```bash
npm ci
npm run build
```

Then, for Android, use the project's existing Capacitor/Gradle workflow.
