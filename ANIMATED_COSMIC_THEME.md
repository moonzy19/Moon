# Project by Tirta — Animated Cosmic Themes

The cosmic theme system now includes ambient motion while keeping business data stable and readable.

## Themes

- **Matahari** — slow solar breathing/glow.
- **Bulan** — moonlight drift and soft atmospheric motion.
- **Galaksi** — slow nebula rotation.
- **Blackhole** — rotating gravitational/accretion glow.
- **Nebula** — flowing color-cloud motion.

## Performance

Animations use CSS transforms, opacity, filters, and gradients; no external video/canvas asset is required. `prefers-reduced-motion` disables long-running animation for users who request less motion.

## Theme transition

`applyCosmicTheme()` persists the selected theme in local storage and dispatches `project-tirta-theme-change`, so all participating surfaces update from the same theme source.

## Brand

The application brand is **Project by Tirta**.
