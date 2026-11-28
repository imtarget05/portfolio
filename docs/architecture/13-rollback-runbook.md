# Rollback & Operational Runbook

## Rollback Triggers
| Trigger | Threshold | Action |
|---------|-----------|--------|
| CI deploy failure | Any step fails | Abort deploy, alert team |
| High error rate | > 5% 5xx over 5 min | Revert to previous deploy |
| Performance regression | Lighthouse score < 0.8 | Rollback + investigate |
| Database connection error | Neon unreachable | Failover to static content only |
| Security incident | Credential leak detected | Revoke credential, rotate secrets |

## Rollback Procedures

### Render Web Service (Next.js)
```bash
# Via Render Dashboard:
# 1. Go to Web Service → Deploys
# 2. Select previous successful deploy
# 3. Click "Redeploy this commit"
#
# Via Render CLI (if available):
render deploys list --service <service-id>
render deploys redeploy --deploy-id <previous-deploy-id>
```

### Cloudflare Workers (API)
```bash
# List deployments
wrangler deployments list

# Rollback to previous version
wrangler rollback --env production

# Or deploy previous known-good commit
git checkout <previous-commit>
wrangler deploy
```

### Cloudflare Pages (Immersive 3D Static Assets)
```bash
# Via Cloudflare Dashboard:
# 1. Go to Pages → immersive-3d → Deployments
# 2. Select previous deployment
# 3. Click "Promote to production"

# Via Wrangler:
wrangler pages deployment list --project-name=immersive-3d
wrangler pages deployment rollback --project-name=immersive-3d --deployment-id <id>
```

## Emergency Contacts
| Service | Contact | Severity |
|---------|---------|----------|
| Neon Database | Neon Console → Support | Critical (data loss) |
| Cloudflare | Cloudflare Dashboard → Support | High (API/edge down) |
| Render | Render Dashboard → Support | High (portfolio down) |
| GitHub | GitHub Support | Medium (CI/CD down) |

## Log Retention
| Log Type | Retention | Storage |
|----------|-----------|---------|
| Worker execution logs | 7 days | Cloudflare Logs |
| Render build logs | 30 days | Render |
| CI/CD logs | 90 days | GitHub Actions |
| Access logs | 7 days | Cloudflare |
