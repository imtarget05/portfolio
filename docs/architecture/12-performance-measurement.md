# Performance Measurement & WebGL Fallback

## Performance Budgets (Lighthouse CI)
| Metric | Budget | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Time to Interactive | < 3.0s | Lighthouse |
| Total Blocking Time | < 300ms | Lighthouse |
| Speed Index | < 2.0s | Lighthouse |

## WebGL Fallback Strategy
| Capability | 3D Quality | Fallback |
|------------|------------|----------|
| WebGL2 + High VRAM (>2GB) | Full Three.js scenes | N/A |
| WebGL2 + Low VRAM (<2GB) | Reduced particle count, simplified geometries | Simplified 3D |
| WebGL1 only | Basic Three.js | CSS 2D representation |
| No WebGL / Reduced motion | N/A | HTML/CSS 2D cards |

## Intel Integrated Graphics Optimization
- Bounded device pixel ratio (max 1.5)
- Disabled post-processing on low-end devices
- Lazy-loaded 3D assets
- Disposed WebGL resources on scene change
- Adaptive rendering based on frame rate

## Measurement Commands
```bash
# Lighthouse CI
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./lighthouse-report.json

# Bundle size check
npm run build && npx next-bundle-analyzer

# WebGL fallback test (manual)
# Open Chrome DevTools → Rendering → Disable WebGL
```

## Status: NOT RUN
Requires browser runtime and repeatable measurements. No benchmarks asserted yet.
