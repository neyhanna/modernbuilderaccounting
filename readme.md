# Modern Builder Accounting — Brand & Website System

Design system and website codebase for [modernbuilderaccounting.com](https://www.modernbuilderaccounting.com/), rebuilt from the client's own design-canvas source files (Home, Services, Technology, Team, Contact) with real copy, real team photos, and the real logo.

## File Index

```
styles.css                      # CSS entry — @imports all tokens
tokens/
  fonts.css                     # Google Fonts @import (Cormorant Garamond + Space Grotesk)
  colors.css                    # --mba-* color tokens + semantic aliases
  typography.css                # Font families, scale, weights, leading, tracking
  spacing.css                   # 4px grid scale + semantic layout tokens
guidelines/                     # Foundation specimen cards (DS tab → Colors/Type/Spacing/Brand)
  colors-light.card.html        # Light/UI palette swatches
  colors-dark.card.html         # Dark/Brand palette swatches
  colors-accent.card.html       # Accent palette + on-dark body text
  type-display.card.html        # Cormorant Garamond specimens
  type-body.card.html           # Space Grotesk specimens
  type-scale.card.html          # Full scale reference
  type-eyebrow.card.html        # Eyebrow / label examples
  spacing.card.html             # Visual spacing scale
  brand-identity.card.html      # Wordmark on light + dark
  components-button.card.html   # Button specimens
  components-badge.card.html    # Badge pill specimen
components/core/                # Reusable React UI primitives
  Button.*                      # Primary (navy) + CTA (blue) + secondary buttons
  Badge.*                       # Partner pill badge (+ solid "Most common" variant)
  Nav.*                         # Sticky navigation bar
  ServiceCard.*                 # Dark-section service feature card
  Eyebrow.*                     # Tracked uppercase section label
  core.card.html                # Components card for DS tab
ui_kits/website/                # Full marketing website
  index.html                    # Interactive 5-page SPA (Home/Services/Technology/Team/Contact)
  website.css                   # Page-level layout classes (nav, hero, works-with, FAQ, footer, etc.)
  NavBar.jsx                    # Site nav, wraps components/core/Nav with real links + logo
  Footer.jsx                    # Site footer with real contact info + Adaptive badge
  HomePage.jsx                  # Home: hero, works-with, services, FAQ, CTA
  ServicesPage.jsx              # Services: bookkeeping + consulting detail, process steps
  TechnologyPage.jsx            # Technology: Adaptive partnership, tool stack, why-it-matters
  TeamPage.jsx                  # Team: Tim Savre (Founder) + Matt Zimmer (Partner) bios
  ContactPage.jsx               # Contact: scheduling card + "what to expect" steps
assets/
  logo.png                      # Real logo (roofline/bar-chart mark, navy + teal, on white/transparent)
  team-tim-savre.jpg            # Real founder photo
  team-matt-zimmer.jpg          # Real partner photo
  adaptive-advisor-badge.png    # Real "Adaptive Advisor" referral badge
readme.md                       # This file
SKILL.md                        # Agent skill configuration
```

## Content provenance

All page copy, the logo, both team photos, and the Adaptive Advisor badge were pulled directly from the client's own Claude Design canvas files (`Final_Modern_Builder_Accounting_V2.dc.html`, `Services.dc.html`, `Technology.dc.html`, `Team.html`, `Contact.dc.html`) — nothing on this site is placeholder or invented copy. Real facts confirmed this way:

- **Founder**: Tim Savre — Accounting degree, University of St. Thomas (MN); CFMA Twin Cities Chapter member; Board Member, Project Echelon.
- **Partner**: Matt Zimmer — 5 years construction accounting; Accounting & Finance degree, Lees-McRae College; former professional cyclist.
- **Scheduling**: `https://calendar.app.google/MGAEMQz4kc5kvxrK8`
- **Email**: `info@modernbuilderaccounting.com`
- **Adaptive referral link**: `https://referrals.adaptive.build/uW8cdiFU`
- **Tech partners**: Adaptive Build (preferred partner), QuickBooks Online, ProCore, BuilderTrend, JobTread.

No phone number or street address appeared in any source page, so none is shown on the site.

## Intentional additions

- The **Eyebrow** component wraps the tracked-uppercase label pattern (10px / 500 weight / 0.24em tracking) that appears above nearly every section headline across all 5 pages, but wasn't named as a discrete component in the original canvas files. Extracted because it's used identically everywhere.
- **Nav** (`components/core/Nav.jsx`) is the generic reusable primitive; **NavBar** (`ui_kits/website/NavBar.jsx`) is the Modern Builder Accounting–specific instance that configures it with the real logo and link set.
- The original canvas pages hard-coded a text wordmark in the nav (`Modern Builder Accounting`, tracked uppercase) because no logo file existed yet at design time. Since the real logo was supplied afterward, the componentized nav now renders the logo image; the text-wordmark fallback is preserved in `Nav.jsx` for any context where the image isn't available.

## Known gaps

- **Fonts**: Google Fonts CDN only — no self-hosted `.woff2` files were provided (the Team page's canvas bundle embedded them for offline preview, not as a distributable asset). Ask the client if self-hosting is required for performance/offline requirements.
- **Wix Headless deployment**: this repo is the site's source code. Actually provisioning it against a Wix Headless backend requires running `npx @wix/cli login` and `npx @wix/cli env pull` from a machine with real network access to wix.com — not possible from this sandboxed session (outbound access to wix.com is policy-blocked here, and no CLI execution tool was available). The live Wix site (`987afdfd-d7b3-4334-a1e9-1bafc0378e48`, bound to the custom domain) was left untouched pending that decision.
