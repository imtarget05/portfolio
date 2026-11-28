# Observability: Logs & Rollback

## Workers Logs Configuration
| Setting | Value |
|---------|-------|
| Observability enabled | true |
| Log retention | 7 days (free tier) |
| Log push destination | Cloudflare Logpush (optional) |

## Health Check Endpoints
| Endpoint | Service | Response |
|----------|---------|----------|
| `/api/health` | Workers API | `{ "status": "ok" }` |
| `/` | Next.js (Render) | HTTP 200 |
| `/immersive` | Workers Static Assets | HTTP 200 |

## Rollback Strategy
| Scenario | Trigger | Action |
|----------|---------|--------|
| Deployment failure | CI deploy step fails | Rollback to previous successful deploy |
| High error rate | > 5% 5xx errors over 5 min | Revert to previous Wrangler deployment |
| Performance regression | Lighthouse score < 0.8 | Rollback + investigate |
| Database connection error | Neon connectivity fail | Failover to static content only |

## Rollback Commands
```bash
# Rollback Worker to previous deployment
wrangler rollback --env production

# Rollback Render to previous deploy
# Via Render Dashboard: Deploys → Select previous → Redeploy

# Emergency: Disable autoDeploy
# render.yaml: autoDeploy: false
```

## Alerting
| Channel | Trigger | Severity |
|---------|---------|----------|
| GitHub Actions | CI job fails | High |
| Render dashboard | Health check fails | High |
| Cloudflare Workers Logs | Error rate > 5% | Medium |

## Log Retention Policy
| Log Type | Retention | Storage |
|----------|-----------|---------|
| Worker execution logs | 7 days | Cloudflare Logs |
| Render build logs | 30 days | Render |
| CI/CD logs | 90 days | GitHub Actions |
| Access logs | 7 days | Cloudflare |
