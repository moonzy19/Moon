# CSS Cascade Architecture

Project by Tirta deliberately avoids author-level `!important` declarations.

## Rules

1. Base styles come first; platform/theme refinements are loaded after their base styles.
2. Prefer scoped selectors such as `html[data-platform="android"] ...` and page/component classes over priority flags.
3. Keep responsive overrides inside the relevant media query and after the desktop rule they refine.
4. Use semantic state classes/attributes (`open`, `active`, `hidden`, `data-*`) instead of forcing presentation through priority flags.
5. For temporary DOM suppression, prefer semantic `hidden` state or a dedicated class instead of `style.setProperty(..., "important")`.
6. Reduced-motion rules must be placed after animated rules and use sufficient selector specificity so they win without priority flags.

The release gate `npm run audit:css` fails whenever a priority declaration is reintroduced.
