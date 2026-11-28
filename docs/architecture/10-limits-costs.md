# Cloudflare Free Tier Limits & Cost Verification

## Cloudflare Workers Free Tier
| Metric | Free Limit | Current Usage | Status |
|--------|------------|---------------|--------|
| Requests/day | 100,000 | ~0 (new deployment) | Within limit |
| Requests/month | ~3,000,000 | ~0 (new deployment) | Within limit |
| CPU time/request | 10ms | < 5ms (simple API) | Within limit |
| Memory | 128 MB | < 50 MB | Within limit |
| Custom domains | Unlimited (paid zones) | N/A | N/A |
| KV storage | 1 GB | 0 (not using KV) | Within limit |
| D1 databases | 5 GB, 100K reads/day | 0 (using Neon) | N/A |
| R2 storage | 10 GB | 0 (not using R2) | N/A |
| Vectorize | 20K vectors, 1K queries/day | 0 (Post-MVP) | N/A |

## Cloudflare Pages Free Tier (Static Assets)
| Metric | Free Limit | Status |
|--------|------------|--------|
| Builds/month | 500 | Within limit |
| Bandwidth/month | Unlimited | Within limit |
| Custom domains | 100 | Within limit |

## Render Free Tier
| Metric | Free Limit | Status |
|--------|------------|--------|
| Web Service | 750 hours/month | Within limit |
| Static Sites | Unlimited | Within limit |
| Disk | 1 GB | Within limit |

## Estimated Monthly Cost
| Service | Estimated Cost | Notes |
|---------|---------------|-------|
| Cloudflare Workers | $0 | Within 100K requests/day |
| Cloudflare Pages | $0 | Static assets |
| Render Web Service | $0 | Free tier (750 hrs/mo) |
| Neon PostgreSQL | $0 | Free tier (up to 0.5 GB) |
| **Total** | **$0/month** | Within free tier limits |

## Cost Monitoring
- Cloudflare dashboard: Workers analytics (requests, errors, CPU)
- Render dashboard: Usage and billing
- Neon dashboard: Database storage and connections

## Quota Alerts
| Threshold | Action |
|-----------|--------|
| 80% of Workers daily requests | Send warning email |
| 90% of Workers daily requests | Scale back non-critical Workers |
| 100% of Workers daily requests | Requests queued/dropped |

## Cost Optimization
- Static assets served via Workers Static Assets (not Worker requests)
- API Worker only for dynamic `/api/chat` endpoint
- Next.js kept on Render Docker (no Worker execution)
- Caching via Cloudflare CDN reduces Worker invocations
