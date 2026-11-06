# Plan: Premium Immersive 3D Website (Apple Liquid Glass + Three.js)

## Goal
Build a standalone immersive 3D website (4 chapters: Introduction, Explore, Experience, Final Scene) with Apple-inspired Liquid Glass UI, genuine Three.js WebGL environment, scroll-linked camera transitions, GSAP animations, deployed as a free Render Static Site.

## Context & Decisions
| Decision | Value | Rationale |
|----------|-------|-----------|
| Stack | React + Vite + TypeScript + Three.js + @react-three/fiber + @react-three/drei + GSAP | Spec requirement; genuine WebGL, not CSS parallax |
| Location | `immersive/` subdirectory at repo root (own package.json, vite config, render.yaml) | Keeps existing Next.js portfolio intact; meets free Render Static Site requirement |
| Deployment | Render Static Site (`npm ci && npm run build`, publish `dist/`) | Spec constraint: no backend, no server-side GPU |
| 3D assets | Procedural Three.js geometry only (no GLB/GLTF exist in repo) | No 3D models available; torii gate/terrain/particles built from BoxGeometry/CylinderGeometry/PlaneGeometry/Points |
| Reference video | `references/3699.mp4` does not exist | Proceed from written spec (Japanese-inspired torii gate, atmospheric fog, depth) |
| Language | Bilingual EN/VI (matches existing portfolio pattern) | Consistent with existing codebase |
| Linking | Existing Next.js navbar gains a link to the immersive app URL; immersive app links back to portfolio | Cross-reference without merging codebases |

## Tech Stack
- React 18 + TypeScript (strict)
- Vite (dev server + production build to `dist/`)
- Three.js + @react-three/fiber + @react-three/drei
- GSAP + ScrollTrigger
- Tailwind CSS (for glass UI + layout)
- Vitest (unit tests)
- Deploy: Render Static Site

## File Structure (new, under `immersive/`)
```
immersive/
  package.json
  vite.config.ts
  tsconfig.json
  index.html
  render.yaml
  README.md
  public/
    models/   (empty placeholder)
    textures/ (empty placeholder)
  src/
    main.tsx
    App.tsx
    index.css (glass design system CSS variables)
    components/
      glass/
        GlassNavbar.tsx
        GlassButton.tsx
        GlassCard.tsx
        GlassModal.tsx
        GlassDock.tsx
        GlassOverlay.tsx
      layout/
        ChapterLayout.tsx
        ScrollIndicator.tsx
    experience/
      scene/
        Scene.tsx (Three.js canvas wrapper, lighting, fog, camera)
        camera/
          CameraController.tsx (scroll-linked camera path, mouse parallax)
        environment/
          ToriiGate.tsx
          Terrain.tsx
          FogVolume.tsx
          Particles.tsx
        objects/
          (procedural geometry helpers)
        effects/
          PostProcessing.tsx (adaptive: disabled on mobile/reduced-motion)
    hooks/
      useScrollProgress.ts
      useResizeHandler.ts
      useThreeFallback.ts (WebGL availability check)
    sections/
      Chapter01.tsx (Introduction)
      Chapter02.tsx (Explore)
      Chapter03.tsx (Experience)
      Chapter04.tsx (Final Scene)
    styles/
      glass.css
    utils/
      colors.ts
      easing.ts
    tests/
      App.test.tsx
      Scene.test.tsx
```

## Phase-by-Phase Tasks

### Phase 1 — Foundation
1. Scaffold Vite + TypeScript + Tailwind project in `immersive/`
2. Install deps: three, @react-three/fiber, @react-three/drei, gsap, react, react-dom, lucide-react, vitest, jsdom
3. Create `index.html`, `vite.config.ts`, `tsconfig.json`, `render.yaml`
4. Build glass design system (`index.css` CSS variables: glass bg, blur, border, shadow, radii, typography, durations)
5. Create reusable glass components: GlassNavbar, GlassButton, GlassCard, GlassModal, GlassDock, GlassOverlay
6. Create `App.tsx` with chapter routing (single page, scroll-based chapters, no hard mount/unmount of WebGL)

### Phase 2 — 3D Experience
7. Create `Scene.tsx` (R3F canvas, lighting: ambient + directional + spot, fog, shadows, environment)
8. Create `CameraController.tsx` (scroll-linked camera path across 4 chapters, mouse parallax desktop, touch mobile, smooth interpolation, prefers-reduced-motion)
9. Create environment objects: `ToriiGate.tsx`, `Terrain.tsx`, `FogVolume.tsx`, `Particles.tsx`
10. Create `useThreeFallback.ts` hook (WebGL availability → CSS fallback)

### Phase 3 — Integration (4 Chapters)
11. Chapter01: fullscreen 3D hero, cinematic camera intro, heading, CTA, scroll indicator
12. Chapter02: camera moves deeper, new architecture, floating glass panels, scroll-triggered reveals
13. Chapter03: interactive glass cards, hover feedback, content transitions synced to 3D
14. Chapter04: distinct viewpoint, final glass panel, CTA, minimal footer
15. GSAP ScrollTrigger linking scroll → camera position + section reveals
16. GlassNavbar state changes on scroll; keyboard-accessible nav

### Phase 4 — Optimization
17. Limit device pixel ratio; dispose WebGL resources on unmount
18. Adaptive postprocessing (disabled on mobile/reduced-motion)
19. Lazy-load optional assets; loading state + graceful fallback
20. Mobile layout verification; no layout shifts / scroll jank

### Phase 5 — Verification & Deploy
21. `npm install`, `npm run dev` smoke test
22. `npx vitest run` unit tests
23. `npx tsc --noEmit` typecheck
24. `npm run build` → `dist/`
25. `npm run preview` local static serve check
26. Test all 4 chapters, scroll transitions, mobile layout, console errors, reduced-motion
27. Add `immersive/render.yaml` + README (dev + deploy instructions)

## Validation
- `npm install` succeeds
- `npx vitest run` — tests pass
- `npx tsc --noEmit` — no type errors
- `npm run build` — `dist/` generated, no errors
- `npm run preview` — serves locally
- 4 chapters navigable; scroll + camera transitions work
- Mobile layout intact; no console errors / broken asset requests
- Reduced-motion respected; WebGL fallback renders if WebGL unavailable

## Render Deployment
- Service Type: Static Site
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- SPA rewrite: `/*` → `/index.html`
- Environment: none required (no backend/API keys)

## Risks / Open Questions
- No GLB models exist; all geometry procedural — acceptable per spec but less detailed than a modeled torii gate
- No reference video available — visual direction from written spec only
- Cross-site linking URL for immersive app not yet known (Render URL assigned at deploy); to be added after first deploy
- Performance: 60 FPS desktop / 30 FPS mobile targets; postprocessing disabled on mobile to protect FPS
