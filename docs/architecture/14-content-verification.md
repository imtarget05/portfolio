# Content Verification — Source vs Claims

## Verified Claims (Source Code)
| Claim | Source File | Status |
|-------|-------------|--------|
| Next.js 14.2.0 + TypeScript | `package.json`, `next.config.js` | PASS |
| Vite + Three.js + R3F + GSAP | `immersive/package.json` | PASS |
| Docker multi-stage, non-root | `Dockerfile` | PASS |
| Render Web Service config | `render.yaml` | PASS |
| GitHub Actions CI/CD | `.github/workflows/` | PASS |
| Workers AI + Vectorize source | `src/app/api/chat/route.ts` | PASS |
| Neon PostgreSQL module | `src/lib/db.ts` | PASS (uses env var now) |
| Shared 2D/3D Content Layer | `shared/projects/index.ts` | PASS (new) |
| Role-based pages | `src/app/roles/[role]/page.tsx` | PASS (6 roles) |
| 3D System Simulation | `immersive/src/experience/simulations/` | PASS (3 sims) |
| Animation lifecycle fix | `immersive/src/App.tsx` | PASS |

## Unverified Claims
| Claim | Reason |
|-------|--------|
| Cloudflare Workers deployment | No Wrangler auth, no deploy executed |
| Production DNS/TLS/routing | Not configured in Cloudflare dashboard |
| Render auto-deploy disabled | `autoDeploy: false` but not tested |
| Lighthouse scores | Browser runtime not available |
| Playwright E2E pass | Server timeout during test execution |
| Docker build | Colima socket access denied |
| CVE audit | npm registry DNS blocked earlier |

## Credential Status
| Item | Status | Action Required |
|------|--------|-----------------|
| Neon connection string in `src/lib/db.ts` | REMOVED | ✅ Done |
| Neon credential in git history | STILL EXPOSED | Revoke at Neon Console |
| `DATABASE_URL` in `.env.example` | ADDED | ✅ Done |
| `DATABASE_URL` in `render.yaml` | ADDED | ✅ Done |
| CI secret scan | ADDED | Not yet run in GitHub |

## Files Modified (Current Working Tree)
| File | Change |
|------|--------|
| `.github/workflows/ci.yml` | Removed auto-deploy, added security scan, added immersive audit |
| `src/app/projects/[slug]/page.tsx` | 404 handling, removed `useLang`, hardcoded `en` |
| `workers/portfolio-api/src/index.ts` | Removed unverified metrics (publicRepos, totalTestsPassing) |
| `src/lib/db.ts` | Removed hardcoded credential, uses env var |
| `Dockerfile` | Added Vite immersive build stage |
| `render.yaml` | Removed `rootDir`, added `DATABASE_URL`, `autoDeploy: false` |
| `immersive/src/App.tsx` | Fixed `requestAnimationFrame` cleanup |
| `wrangler.jsonc` | New - Cloudflare Workers config |
| `immersive/wrangler.jsonc` | New - Workers Static Assets config |

## Files Added (Untracked)
| File | Purpose |
|------|---------|
| `docs/verification-2026-11-28.md` | Verification snapshot |
| `docs/NEON_CREDENTIAL_REVOCATION.md` | Credential revocation action plan |
| `docs/architecture/11-production-diagram.mmd` | Production infrastructure diagram |
| `docs/architecture/12-performance-measurement.md` | Performance & WebGL fallback |
| `docs/architecture/13-rollback-runbook.md` | Rollback & operational runbook |
| `.lighthouserc.json` | Lighthouse CI configuration |
| `tests/e2e/role-and-projects.spec.ts` | Playwright E2E tests |
