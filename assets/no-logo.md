# Logo usage notes

`logo.svg` and `logo-dark.svg` in this folder are placeholder wordmarks generated from the brand brief (structure bars in the accent blue, "MODERN BUILDER / ACCOUNTING" set in Oswald-style caps). No original logo artwork was supplied with this rebuild.

- The brief calls for Oswald as the wordmark typeface. It isn't loaded anywhere else in the system (display/body type is Cormorant Garamond / Space Grotesk), so it's referenced here as a font-family fallback chain rather than an added dependency — swap in a real Oswald @import if the client confirms it as the wordmark face.
- **Action needed**: ask the client for the actual logo source file (SVG/AI/EPS) and replace both files here. Keep the same filenames so every reference in `components/core/Nav.*` and `ui_kits/website/NavBar.jsx` keeps working.
- `logo.svg` — for light backgrounds (navy structure, brand-blue bars).
- `logo-dark.svg` — for dark backgrounds (cream structure, accent-blue bars).
