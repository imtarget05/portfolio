# Immersive 3D Website

Premium Apple-inspired Liquid Glass UI with a genuine Three.js WebGL environment.

## Tech Stack

- React 18 + TypeScript (strict)
- Vite
- Three.js, @react-three/fiber, @react-three/drei
- GSAP + ScrollTrigger
- Tailwind CSS
- Vitest

## Project Structure

```
immersive/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── render.yaml
├── index.html
├── README.md
├── public/
│   ├── models/
│   └── textures/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── glass/
    │   └── layout/
    ├── experience/
    │   ├── scene/
    │   ├── camera/
    │   ├── environment/
    │   ├── objects/
    │   └── effects/
    ├── hooks/
    ├── sections/
    ├── styles/
    ├── utils/
    └── tests/
```

## Local Development

```bash
cd immersive
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
cd immersive
npm run build
```

Output goes to `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Tests

```bash
npm run test
```

## Lint

```bash
npm run lint
```

## Deploy to Render (Static Site)

1. Create a new **Web Service** on Render.
2. Connect this repository.
3. Set **Root Directory** to `immersive`.
4. Service Type: **Static Site**
5. Build Command: `npm ci && npm run build`
6. Publish Directory: `dist`
7. SPA rewrite: `/*` → `/index.html`

## Features

- Four connected chapters: Introduction, Explore, Experience, Final Scene
- Genuine Three.js WebGL environment (torii gate, terrain, fog, particles)
- Scroll-linked cinematic camera path with GSAP ScrollTrigger
- Apple-inspired Liquid Glass UI components
- Responsive desktop & mobile
- prefers-reduced-motion support
- WebGL fallback if unavailable
