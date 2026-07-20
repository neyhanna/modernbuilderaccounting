# How to Deploy a Claude-Designed Site to Wix

A repeatable, start-to-finish guide. No GitHub repo required.

## What you need

- The finished website as a **single self-contained HTML file**
- **Node.js 20.11 or newer**
- A Wix **account-level API key** (manage.wix.com → Account Settings → API Keys)
- Internet access to `*.wix.com` and `*.wixapis.com`

---

## Step 1 — Design in Claude and download the HTML

Design/iterate the site in **Claude Design**, then **download / export the HTML**.
The export will still point at external images and fonts — that's fine, Step 2
fixes it.

## Step 2 — Flatten it into one self-contained file

Wix serves a static file most reliably when it has zero external dependencies.
Ask Claude:

> "Flatten this into a single self-contained HTML file — inline all images,
> fonts, CSS, and JS as data URIs so there are zero external requests. Save it as
> `mba-flattened.html`."

**Test it:** open the file with your wifi off. It should render fully. That file
is the only thing you deploy.

## Step 3 — Deploy to Wix

**Two rules before you start:**

1. **Use the `@wix/cli` package** — run `npx @wix/cli@latest …`. Plain `npx wix`
   is a *different* package and won't work.
2. **Give the new site a UNIQUE name.** The folder name becomes the site's name
   *and* its web address. If it matches a site you already have, it fails. Use
   something like `mba-staging-site`, not your live site's exact name.

```bash
# Folder name = the new site's name/address — keep it unique
mkdir -p mba-staging-site
cp mba-flattened.html mba-staging-site/index.html
cd mba-staging-site

npx @wix/cli@latest login --api-key "YOUR_API_KEY"   # → "logged in to account …"
npm create @wix/new@latest init                       # creates the site + config
mkdir -p dist && cp index.html dist/index.html        # release reads ./dist
npx @wix/cli@latest release                            # → prints your live URL
```

The last command prints:
`Site published on https://<something>.wix-site-host.com` — that's your live site.

## Step 4 — Finish up

- **Open the URL** in a browser to confirm it looks right.
- **Delete any blank duplicate sites** in manage.wix.com → My Sites (trash is
  restorable).
- **Go live when ready:** point your real domain at the new site in the Wix
  dashboard. This replaces whatever that domain currently serves, so do it only
  when you're ready.

---

## If you run this through an AI coding agent (e.g. Claude Code)

The Wix CLI detects it's inside an agent and **ignores `--api-key`**, hanging on
a login prompt. Fix: put `env -u AI_AGENT -u CLAUDECODE -u CLAUDE_CODE` in front
of each `npx`/`npm` command. **In a normal terminal, ignore this — you don't need
it.**
