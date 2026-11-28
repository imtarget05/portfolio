# Plan: Hybrid 3D Engineering Portfolio 2027

## Goal
Transform the existing `imtarget05/portfolio` Next.js repo into a Hybrid 3D Engineering Portfolio: an evidence-first site with 3 flagship projects (FlashSale, AKS-SRE-Platform, QuanLyKho), IncidentIQ as the AI differentiator, 6 role-based pages, Recruiter Mode / Technical Lead Mode, an Immersive 3D Mode at `/immersive`, and a Career Center — optimized for Intel-based computers and free hosting (Render).

## Context
Existing repo: `/Users/mainguyenbinhtan/Downloads/portfolio`
- Next.js 14.2.0, TypeScript, Tailwind CSS, Framer Motion, standalone output, Dockerfile + render.yaml for Render
- Content layer: `src/content/data.ts` (12 projects with roleFit, evidence, limitations) + `src/content/projectEvidence.ts` (scope/proof/boundary)
- Evidence ledger: `docs/apply-2027-evidence.md` (snapshots, CI run URLs, commit SHAs, boundaries)
- Existing `immersive/` directory with a separate Vite + Three.js plan (reusable as basis for `/immersive`)
- Empty `src/app/cv` (CV page to build)
- Existing plans: chat-history toggle, render URL update, skills-showcase 2D/3D

## Decisions
| Decision | Value | Rationale |
|----------|-------|-----------|
| Flagship projects | FlashSale (Backend), AKS-SRE-Platform (DevOps/Cloud), QuanLyKho (Enterprise/ERP) | User strategy; strongest CI/test evidence |
| AI differentiator | IncidentIQ | Applied AI incident triage (RAG, MCP, LangGraph) |
| Role-based pages | `/roles/backend`, `/roles/devops`, `/roles/ai`, `/roles/network`, `/roles/bank`, `/roles/erp` | Recruiter can filter by JD |
| Modes | Recruiter Mode (default, fast, mobile-friendly) + Technical Lead Mode (system design, source, ADR, CI/CD, benchmarks, verified evidence) | P0 per strategy |
| Immersive 3D | `/immersive`, Three.js + React Three Fiber + Drei + GSAP, simplified 3D architecture simulations for 3 flagships, lazy-loaded assets, adaptive rendering, 2D fallback | User custom scope; reuses existing `immersive/` |
| Career Center | CV download, certifications, education, experience | `src/app/cv` currently empty |
| Content layer | Shared TypeScript (`data.ts`, `projectEvidence.ts`); no MDX migration | Keeps bilingual typing, minimal refactor |
| UI framework | Existing custom components; no mandatory shadcn/ui migration | Preserve working functionality |
| Next.js | Audit existing 14.2.0; upgrade only to a compatible, security-patched version | Minimize risk, keep Render Docker working |
| Quality gates | GitHub Actions (build, lint, typecheck), Playwright (E2E), Lighthouse | P0 per strategy |
| Deployment | Render, free tier, preserve existing Docker/standalone setup | Free hosting constraint |
| Optimization | Intel-based computers (adaptive 3D rendering, 2D fallback) | User constraint |
| Out of MVP (post-MVP) | AI assistant/RAG, live GitHub API dashboard, advanced 3D physics, additional featured projects | User custom scope |

## Phases & Tasks

### Phase 01 — Repository Audit & Content Lock
1. Audit source of 3 flagship repos + IncidentIQ: verify engineering claims (test counts, CI status, patterns) against actual code and latest commit
2. Snapshot evidence: commit SHAs, CI run URLs, ADR links, benchmark artifacts; record boundaries (simulated vs production)
3. Consolidate project content into shared TypeScript layer (`src/content/data.ts`): roleFit, evidence, limitations, architecture, engineeringDecisions for the 4 featured projects
4. Add IncidentIQ case-study entry to `data.ts` (roleFit: backend 4, devops 4, ai 5, bank 3, network 2, erp 4)
5. Check licenses, secrets, dependencies across featured repos; flag anything not safe to link/publicize
6. Update `projectEvidence.ts` scope/proof/boundary for all 4 featured projects

### Phase 02 — Portfolio Core & Modes
7. Homepage: Recruiter Mode default — professional, fast, mobile-friendly hero + 3 featured projects + quick stats (60 repos, 3 flagships, 5+ domains)
8. Technical Lead Mode toggle: exposes system design, source links, ADRs, CI/CD, benchmarks, verified engineering evidence per project
9. Build 6 role-based pages (`/roles/[role]`) filtering projects by `roleFit` (Backend, DevOps, AI, Network, Banking, ERP)
10. Upgrade `/projects/[slug]` case-study pages: bilingual, architecture diagram, evidence links, limitations, engineering decisions, verified status
11. Build Career Center page (`/cv`): CV download, certifications, education, experience, contact
12. Update navigation to include Roles, Case Studies, Career Center, Immersive 3D; Recruiter/Technical Lead mode switch
13. SEO: sitemap.ts, robots.ts, metadata for all role pages and project pages

### Phase 03 — Engineering Evidence
14. Write case-study copy (problem/solution/architecture/engineering decisions/evidence/limitations) for FlashSale, AKS-SRE-Platform, QuanLyKho, IncidentIQ
15. Architecture visualization (Mermaid / React Flow) matched to source code for each flagship
16. Link CI runs, commit SHAs, benchmark artifacts, ADRs from evidence ledger
17. Add verification-boundary disclaimers on every evidence claim (simulated payments, torn-down AKS cluster, local kind validation, etc.)

### Phase 04 — Immersive 3D Mode (`/immersive`)
18. Reuse/adapt existing `immersive/` directory (Three.js, R3F, Drei, GSAP) into the portfolio as the `/immersive` route
19. Build simplified 3D architecture simulations for the 3 flagship projects (interactive, not decorative)
20. Lazy-load 3D assets; adaptive rendering; 2D fallback for reduced-motion / low-capability devices
21. Optimize for Intel-based computers (bounded device pixel ratio, disposed WebGL resources, postprocessing disabled when needed)
22. Link `/immersive` from navbar and homepage; cross-link back to portfolio

### Phase 05 — Quality Gate & Deploy
23. GitHub Actions CI: `npm run build`, `npm run lint`, `tsc --noEmit`, Playwright E2E, Lighthouse CI
24. Fix build/lint/typecheck errors; ensure mobile + desktop layout integrity
25. Verify all technical claims against source code before release (no overstated CI/production claims)
26. Deploy preview on Render; check health check, standalone output, env vars
27. Final check: links (CV, GitHub, demo, evidence), SEO, accessibility, reduced-motion

## Validation
- `npm run build` succeeds (no errors)
- `npm run lint` passes
- `npx tsc --noEmit` — no type errors
- Playwright E2E tests pass (homepage, role pages, project detail, immersive link, career center)
- Lighthouse CI meets performance/accessibility baseline
- All GitHub/evidence links resolve; commit SHAs and CI runs match evidence ledger
- 3D route loads with 2D fallback; reduced-motion respected
- Deploy preview healthy on Render

## Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| 3D heavy on Intel integrated graphics | Adaptive rendering, lazy-loaded assets, 2D fallback, bounded DPR |
| Next.js upgrade breaks Render Docker build | Audit first; only security-patched compatible upgrade; test build before deploy |
| External repo claims stale or unverified | Snapshot commit SHAs/CI runs; state boundaries honestly; re-check before release |
| `immersive/` separate Vite build diverges from Next.js | Adapt into Next.js route or keep as linked sub-app with shared nav; avoid duplicating logic |

## Open Questions (resolve during implementation)
- Exact CV PDF source file to link from `/cv` (none exists yet in repo)
- Whether to bump Next.js to a specific patched 14.x or stay at 14.2.0 pending audit
