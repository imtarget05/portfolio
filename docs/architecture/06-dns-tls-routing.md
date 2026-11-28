# Cloudflare DNS, TLS & Routing Configuration

## Domain Setup
| Record | Type | Name | Value | Proxy | Purpose |
|--------|------|------|-------|-------|---------|
| @ | A | @ | 192.0.2.1 | DNS Only | Placeholder — replace with Cloudflare IP |
| www | CNAME | www | @ | Proxied | WWW subdomain |
| immersive | CNAME | immersive | immersive-3d.<account>.pages.dev | Proxied | Vite 3D static site |
| api | CNAME | api | portfolio-api.<account>.workers.dev | Proxied | Serverless API Worker |

## TLS Configuration
| Setting | Value |
|---------|-------|
| SSL/TLS encryption mode | Full (Strict) |
| Minimum TLS Version | 1.2 |
| Automatic HTTPS Rewrites | On |
| HSTS | On (max-age: 31536000, includeSubDomains) |

## Routing Rules
| Pattern | Destination | Priority | Purpose |
|---------|-------------|----------|---------|
| `/*` | Next.js (Render) | 1 | Portfolio main site |
| `/immersive/*` | Workers Static Assets (immersive-3d) | 2 | Vite 3D app |
| `/api/*` | Workers (portfolio-api) | 3 | Serverless API |
| `/health` | Workers (portfolio-api) | 4 | Health check |

## Cache Rules
| Pattern | Cache Level | Browser TTL | Edge TTL | Purpose |
|---------|-------------|-------------|----------|---------|
| `/immersive/*` | Cache Everything | 1 month | 1 month | Static 3D assets |
| `/api/*` | Bypass | 0 | 0 | Dynamic API |
| `/_next/static/*` | Cache Everything | 1 month | 1 month | Next.js static assets |
| `/*` | Standard | 4 hours | 2 hours | Portfolio pages |

## Workers KV Namespace (Post-MVP)
| Name | Purpose |
|------|---------|
| portfolio-cache | Dynamic cache for API responses |

## Implementation Notes
- Render kept as fallback with `autoDeploy: false`
- Cloudflare proxy must be enabled (orange cloud) for Workers routing
- DNS records must be created in Cloudflare Dashboard
- TLS certificates auto-provisioned by Cloudflare Universal SSL
