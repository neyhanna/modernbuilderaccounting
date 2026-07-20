# Deploy: Modern Builder Accounting → Wix Headless

## Artifact
- `mba-flattened.html` — the finished single-page site, fully self-contained
  (all images, fonts, and styles inlined as data URIs). This is what gets deployed.

## Prerequisites
- **Network:** environment must allow outbound to Wix. Set Network access to
  **Custom** with `*.wix.com` and `*.wixapis.com` (keep the default package
  registries checked), or use **Full**. The default **Trusted** policy blocks
  `manage.wix.com`, so `wix login` fails.
- Node.js 20.11+.
- A Wix API key: manage.wix.com → Account Settings → API Keys.

## Steps
```bash
mkdir -p /tmp/mba-site && cp mba-flattened.html /tmp/mba-site/index.html && cd /tmp/mba-site
npx wix login --api-key <KEY>
npm create @wix/new@latest init      # name: "Modern Builder Accounting"; output dir: "."
npx wix release                      # prints the live URL
```

## Notes
- Each `release` creates a new Wix site; delete duplicate "Modern Builder Accou"
  entries from the Wix sites list afterward.
- Point modernbuilderaccounting.com at the new site only when ready (that domain
  currently serves the existing premium site).
