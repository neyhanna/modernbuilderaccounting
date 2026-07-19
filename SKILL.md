---
name: modern-builder-accounting-brand
description: Applies Modern Builder Accounting's brand system (navy/cream/blue palette, Cormorant Garamond + Space Grotesk type, flat-color no-shadow aesthetic) to any artifact, page, or component for modernbuilderaccounting.com. Use when building or editing pages for this site, or when brand colors, typography, or visual formatting for Modern Builder Accounting apply.
license: Internal use only — Modern Builder Accounting brand assets, not for redistribution.
---

# Modern Builder Accounting — Brand Styling

## Overview

Use this skill whenever working on modernbuilderaccounting.com or any collateral for the firm. It applies the brand's visual system exactly as defined in `tokens/` and demonstrated in `guidelines/` and `ui_kits/website/`.

**Keywords**: Modern Builder Accounting, construction accounting, bookkeeping, branding, visual identity, Cormorant Garamond, Space Grotesk, navy and cream

## Brand Guidelines

### Colors

**Light / UI:**
- White `#FFFFFF` — primary background
- Light gray `#F7F9FC` — subtle backgrounds
- Border `#E4EAF3` — all dividers/borders (1px, light context only)
- Text muted `#6B7280` — body copy
- Text light `#9CA3AF` — labels, metadata

**Dark / Brand:**
- Primary navy `#0B1F3A` — nav text, buttons, headings
- Dark navy `#0A1628` — service section backgrounds
- Section dark `#0D1E38` — CTA background
- Footer `#071020` — deepest dark
- Cream `#EDE8DC` — text on all dark backgrounds

**Accents:**
- Brand blue `#1B67F2` — links, badge fills, dot indicators
- Accent blue `#4E9EFF` — eyebrows on dark, CTAs on dark, em-dash bullets
- Blue tint `#EEF4FF` — badge pill background
- Body on dark `#7A8FA8` — body copy on dark backgrounds

### Typography

- **Display**: Cormorant Garamond, weight 300 primary, italic 300 for emphasis. Never bold in marketing contexts. All headlines and section titles.
- **Body/UI**: Space Grotesk — 300 for body copy, 400 for UI, 500 for nav/labels/buttons, 600 rarely.
- Both load from Google Fonts CDN (see `tokens/fonts.css`). No self-hosted files exist yet.

### Rules

- **No gradients, no background images, no textures.** Flat color only.
- **No box shadows anywhere.** The design uses flat color, not elevation.
- **No backdrop blur.**
- **No icon system, no icon font, no SVG icons, no emoji.** The only decorative mark is the em-dash (–) as a feature-list bullet in dark sections, in accent blue at 18px.
- Default border-radius: 4px. CTA buttons on dark: 3px. Badge pills: 100px.
- Hover: `transition: opacity 0.15s ease` only — no scale, no bounce, no spring.
- Active nav links darken from muted `#6B7280` to navy `#0B1F3A`.
- Sections alternate light (white/`#F7F9FC`) and dark (full-bleed navy) — see `ui_kits/website/website.css` for the exact section classes.

## Features

### Component reuse

Prefer the primitives in `components/core/` (`Button`, `Badge`, `Nav`, `ServiceCard`, `Eyebrow`) over hand-rolled markup when building new pages or sections for this site — they encode the exact spacing, color, and type values above.

### Real content only

This site's copy, logo, team photos, and partner badge all come from the client's own source files (see `readme.md` → Content provenance). When extending the site, match that voice — direct, construction-industry-literate, no filler — rather than generic agency copy.
