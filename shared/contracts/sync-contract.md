# Content Layer Sync Contract

## Purpose
Synchronize content between Next.js portfolio (2D) and Vite immersive (3D) applications.

## Sync Source of Truth
`shared/projects/index.ts` — Contains shared projects, experience, architectures, and contract.

## Sync Strategy
| Consumer | Import Path | Usage |
|----------|-------------|-------|
| Next.js | `@/shared/projects` | Role pages, case studies, chat context |
| Vite Immersive | `../../shared/projects` | 3D simulation data, scene content |

## Version
Current: `1.0.0`

## Fields Synced
- Project metadata (title, category, tech stack, problem, solution)
- Evidence links and limitations
- Architecture diagram references
- Simulation data for 3D scenes
- Experience items

## Last Synced
Auto-generated at build time.
