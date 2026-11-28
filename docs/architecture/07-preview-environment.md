# Preview Environment Configuration

## Preview Deployment Strategy
| Environment | Trigger | URL | Purpose |
|-------------|---------|-----|---------|
| Production | push to main | portfolio.imtarget05.com | Live site |
| Preview | pull_request | pr-{{number}}.portfolio.imtarget05.com | PR testing |
| Staging | manual dispatch | staging.portfolio.imtarget05.com | Pre-production validation |

## GitHub Actions Preview Job
Add to `.github/workflows/ci.yml` for PR previews:

```yaml
  preview:
    needs: quality-gates
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm ci --prefix ./immersive
      - run: npm run build
      - run: npm run build --prefix ./immersive
      - name: Deploy preview to Workers
        working-directory: ./immersive
        run: wrangler pages deploy dist --project-name=immersive-3d-preview
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## Render Preview
- Render Preview available for Docker web service
- Auto-preview disabled (`autoDeploy: false`) — manual trigger via Render dashboard

## Preview Environment Variables
| Variable | Source | Notes |
|----------|--------|-------|
| DATABASE_URL | secrets.DATABASE_URL | Neon preview database |
| CLOUDFLARE_ACCOUNT_ID | secrets.CLOUDFLARE_ACCOUNT_ID | Cloudflare account |
| CLOUDFLARE_API_TOKEN | secrets.CLOUDFLARE_API_TOKEN | Cloudflare API token |

## Preview Cleanup
- Preview deployments auto-expire after 7 days
- Manual cleanup via Cloudflare dashboard
- Render preview auto-deleted on PR close
