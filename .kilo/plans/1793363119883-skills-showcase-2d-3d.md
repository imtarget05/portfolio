# Plan: Skills Showcase Page with 2D + 3D Visualization

## Goal
Add a dedicated `/skills` route that showcases the owner's capabilities with 2D canvas visualizations and 3D interactive elements, plus add the nav link. Keep existing Expertise/TechStack sections on the home page unchanged.

## Context
- Site is currently a single-page home (`/`) rendering all sections via `src/app/page.tsx`.
- Skills data already exists: `src/content/data.ts` — `techStack` (4 categories: Backend, Frontend, Cloud & DevOps, AI & Data) and `expertise` (4 disciplines).
- Existing components: `Expertise.tsx`, `TechStack.tsx` (sections on home page).
- Existing 3D CSS: `.card-3d`, `.reveal-3d`, `.hero-3d-scene`, `.particle`, `.preserve-3d` in `src/app/globals.css` (lines 824–1047).
- No `<canvas>`, no Three.js, no dedicated skills page, no 2D visualization.
- Navbar links are anchor links (`#section-id`) in `src/components/Navbar.tsx:27–37`.

## Decisions (recommended)

1. **New route `/skills`** (not an enhanced home section) — user asked for "giao diện" (interface/page). Standalone page gives a dedicated showcase surface.
2. **No new heavy dependencies** — use existing CSS 3D classes + HTML5 Canvas for 2D. Avoid Three.js/React Three Fiber to keep bundle small on Render Docker standalone.
3. **2D visualization**: Canvas skill radar/spider chart per category (Backend, Frontend, Cloud & DevOps, AI & Data), interactive on hover.
4. **3D visualization**: CSS 3D skill node cards using existing `.card-3d`/`.preserve-3d` patterns, arranged in a 3D grid with hover tilt. Each node = one skill/tech.
5. **Add `/skills` to Navbar** (desktop + mobile overlay), plus nav label in `src/content/data.ts` `nav.skills` (EN: Skills, VI: Kỹ năng).
6. **Bilingual** — EN/VI via existing `useLang()` + `data.ts` pattern.
7. **Responsive** — canvas scales on mobile; 3D grid stacks to 2D cards on small screens.
8. **Keep home page sections** — `Expertise` and `TechStack` remain on `/`; `/skills` is a deeper dive.

## Affected files (new + existing)
| File | Action | Purpose |
|------|--------|---------|
| `src/app/skills/page.tsx` | new | `/skills` route page |
| `src/components/SkillsShowcase.tsx` | new | Main 2D+3D skills visualization component |
| `src/components/SkillRadar.tsx` | new | Canvas 2D radar chart per category |
| `src/components/SkillNode3D.tsx` | new | CSS 3D skill node card |
| `src/components/Navbar.tsx` | edit | Add `/skills` link (desktop + mobile) |
| `src/content/data.ts` | edit | Add `nav.skills` EN/VI label |
| `src/app/sitemap.ts` | edit | Add `/skills` to sitemap (if static routes listed) |

## Validation
- `npx tsc --noEmit` — clean
- `npm run lint` — clean
- `npm run build` — production build succeeds
- Verify `/skills` renders in dev (`npm run dev`) and links from nav work
- Verify EN/VI toggle switches skill labels and chart text

## Rollback
Revert commit; `/skills` route is additive, no existing pages modified except Navbar/data.ts/sitemap (additive only).

## Open question for confirmation
- 3D implementation: CSS 3D cards (recommended, no new deps) vs adding Three.js/React Three Fiber for richer 3D? Recommendation: CSS 3D first; Three.js can be added later if needed.