# Performance & WebGL Fallback Configuration

## Performance Budgets
| Metric | Budget | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Time to Interactive | < 3.0s | Lighthouse |
| 3D Initial Load | < 5.0s | Custom |
| WebGL Fallback | < 2.0s | Custom |

## WebGL Fallback Detection
Created in `immersive/src/components/glass/WebGLFallback.tsx` — detects WebGL support and renders 2D fallback.

## Performance Test Script
Added to CI via Lighthouse CI:
```bash
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./lighthouse-report.json
```

## Adaptive Rendering (Intel Integrated Graphics)
| Capability | 3D Quality | Fallback |
|------------|------------|----------|
| WebGL2 + High VRAM | Full Three.js scenes | N/A |
| WebGL2 + Low VRAM | Reduced particle count | Simplified geometries |
| WebGL1 only | Basic Three.js | 2D Canvas fallback |
| No WebGL | N/A | CSS/HTML 2D representation |

## Implementation Files
- `immersive/src/hooks/useThreeFallback.tsx` — WebGL capability detection
- `immersive/src/components/glass/WebGLFallback.tsx` — 2D fallback UI
- `vite.config.ts` — Manual chunk splitting for 3D libraries

## Lighthouse CI Configuration
```json
{
  "ci": {
    "collect": [
      { "url": "http://localhost:3000/", "settings": { "preset": "desktop" } }
    ],
    "assert": {
      "categories:performance": ["error", { "minScore": 0.8 }],
      "categories:accessibility": ["error", { "minScore": 0.9 }],
      "categories:best-practices": ["error", { "minScore": 0.8 }]
    }
  }
}
```
