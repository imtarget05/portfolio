# Next.js on Cloudflare Workers — Compatibility Test

## Current Status
| Item | Value |
|------|-------|
| Next.js version | 14.2.0 |
| Next.js support status | EOL (End of Life) |
| @opennextjs/cloudflare | Requires Next.js 15+/16 — incompatible with 14.2.0 |
| vinext | Beta (1.0.0-beta.9) — not production-ready |
| Decision | Keep Next.js on Render Docker; migrate to Workers post-MVP after Next.js upgrade |

## Test Procedure (when ready to migrate)

### Option A: Upgrade Next.js → OpenNext adapter
```bash
# 1. Upgrade Next.js to 15.x
npm install next@15 react@19 react-dom@19

# 2. Add OpenNext Cloudflare adapter
npm install @opennextjs/cloudflare wrangler

# 3. Configure wrangler.jsonc for Next.js
# 4. Run compatibility test
npx wrangler pages dev .next
```

### Option B: vinext migration
```bash
# 1. Add vinext to existing app
npx vinext init

# 2. Run compatibility check
npx vinext check

# 3. Deploy to Workers
npx wrangler deploy
```

## Files for Workers Deployment
- `wrangler.jsonc` (root) — Worker API config
- `immersive/wrangler.jsonc` — Workers Static Assets config
- `workers/portfolio-api/src/index.ts` — Serverless API implementation

## Render (Fallback)
- `render.yaml` — Docker web service, autoDeploy: false
- `Dockerfile` — Multi-stage build with Vite immersive included
