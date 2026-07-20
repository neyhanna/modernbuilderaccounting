# Runbook: Claude Design → Live Wix Site

End-to-end, repeatable steps for taking a page from a Claude design to a live Wix
Headless deployment. Written from the Modern Builder Accounting deploy on
2026-07-20. `DEPLOY.md` is the terse version; this expands it and records the
gotchas.

## Prerequisites (once)

- A Wix account and an **account-level API key**
  (manage.wix.com → Account Settings → API Keys).
- **Node.js 20.11+**.
- Outbound network access to `*.wix.com` and `*.wixapis.com` (Wix "Custom" or
  "Full" network policy; the default "Trusted" policy blocks `manage.wix.com`).

---

## Phase 1 — Design in Claude and download the HTML

1. Design/iterate the page in **Claude Design** (or a Claude artifact). For this
   site the source was the client's own Claude Design canvas files — Home,
   Services, Technology, Team, Contact — with real copy, logo, and team photos.
2. When it looks right, **download / export the HTML** from Claude Design.

**Prompt I used (adapt the specifics):**
> "Build the Modern Builder Accounting marketing site (Home, Services,
> Technology, Team, Contact) from these Claude Design canvas files, using the
> brand skill. Use only the real copy, logo, and team photos from the source —
> no placeholder text."

Output: an HTML export that still points at external images, fonts, and scripts.

---

## Phase 2 — Flatten to one self-contained file

Wix Headless serves a static file most reliably when it has **zero external
dependencies**. Flatten the export so every image, font, script, and stylesheet
is inlined as a `data:` URI — one file. That file is `mba-flattened.html`
(~3.7 MB) and it is the only thing that gets deployed.

**Prompt:**
> "Flatten this site into a single self-contained HTML file — inline all images,
> fonts, CSS, and JS as data URIs so there are zero external requests. Output it
> as `mba-flattened.html`."

**Sanity check:** open the file with your network off; it should render fully.

---

## Phase 3 — Deploy to Wix

**The prompt I used:**
> "Check out branch `<branch>` and deploy `mba-flattened.html` to Wix following
> DEPLOY.md — here's my API key: `<KEY>`"

### Read these three facts first

1. **Use the `@wix/cli` package.** The binary is `wix`, but `npx wix` resolves to
   the *wrong* package. Always call `npx @wix/cli@latest …`.
2. **The new site's name must be UNIQUE.** `init` turns the *folder name* into
   both the site's name and its URL slug. If that slug collides with an existing
   site (e.g. your live "Modern Builder Accounting"), `init` fails with
   `CONFLICTING_ROUTE_EXISTS` and leaves a blank duplicate site behind. Give the
   new/staging site a name that is distinct in its **first ~18 characters**.
3. **Only if you run this *inside* Claude Code / an AI agent:** the Wix CLI
   detects the agent and **ignores `--api-key`**, forcing an interactive
   device-login that hangs in an automated session. Prefix every CLI call with
   `env -u AI_AGENT -u CLAUDECODE -u CLAUDE_CODE` to turn that off. **In a normal
   terminal you do not need this.**

### 3.1 — Stage the file

```bash
# Folder name = the new site's name AND its URL slug — make it UNIQUE.
mkdir -p /tmp/mba-staging-site
cp mba-flattened.html /tmp/mba-staging-site/index.html
cd /tmp/mba-staging-site
```

### 3.2 — Log in

```bash
npx @wix/cli@latest login --api-key "<YOUR_API_KEY>"
# Inside Claude Code, instead:
# env -u AI_AGENT -u CLAUDECODE -u CLAUDE_CODE npx @wix/cli@latest login --api-key "<YOUR_API_KEY>"
```

Expect: `Wix CLI is logged in to account <name>`.

### 3.3 — Create the Wix site + project

```bash
npm create @wix/new@latest init
# Inside Claude Code, wrap with the same `env -u …` prefix.
```

Non-interactive. It creates a Wix business + companion app and writes
`wix.config.json` (`projectType: "Site"`, `outputDirectory: "./dist"`). The site
name is taken from the folder name.

### 3.4 — Provide the build output

`wix release` expects build output in `./dist` (per `wix.config.json`) but does
**not** build it. The flattened file is already a finished static build, so just
copy it in:

```bash
mkdir -p dist
cp index.html dist/index.html
```

### 3.5 — Release

```bash
npx @wix/cli@latest release
# Inside Claude Code, wrap with the same `env -u …` prefix.
```

Expect:
`Site published on https://<slug>-<id>-<account>.wix-site-host.com`
— that is your live URL.

---

## Phase 4 — Post-deploy

- **Verify:** open the printed URL in a browser.
- **Clean up duplicates:** delete any blank duplicate sites from
  manage.wix.com → My Sites (moves them to trash; restorable).
- **Point your domain:** when ready to go live, point
  `modernbuilderaccounting.com` at the new site — this replaces the current
  premium site, so do it only when you're ready.
- **Rename (optional):** the display name is whatever the folder was
  (e.g. "Mba Staging Site"); rename it in the dashboard if you like.

---

## A sharper prompt for next time

Fold the gotchas in so the agent doesn't have to rediscover them:

> "Deploy `mba-flattened.html` to a NEW Wix Headless site following DEPLOY.md.
> Use the `@wix/cli` package (the `wix` binary — not `npx wix`). Give the new
> site a UNIQUE name (don't reuse 'Modern Builder Accounting' — it collides with
> the live site's URL slug). If the Wix CLI ignores `--api-key` because it
> detects an AI agent, unset `AI_AGENT` / `CLAUDECODE` / `CLAUDE_CODE`. After
> `init`, copy the HTML into `./dist` before running `wix release`. Delete any
> blank duplicate sites afterward. API key: `<KEY>`"
