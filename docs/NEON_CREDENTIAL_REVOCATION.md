# Neon Credential Revocation — Action Required

## Status: BLOCKED

The hardcoded Neon PostgreSQL connection string was removed from `src/lib/db.ts` and replaced with `process.env.DATABASE_URL`. However, the **previously leaked credential has NOT been revoked**.

## Exposed credential (committed in git history)

```
postgresql://neondb_owner:npg_oRCTwA42hcvB@ep-old-cherry-aoqi8gyv-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

This credential was committed in commit `dcceba3` and remains in the git history. **It must be revoked immediately.**

## Required actions (must be performed by user with Neon access)

| Step | Action | Location |
|------|--------|----------|
| 1 | Log in to Neon Console | https://console.neon.tech |
| 2 | Navigate to project `ep-old-cherry-aoqi8gyv` | Neon Dashboard |
| 3 | Rotate/revoke the `neondb_owner` password | Settings → Database → Password |
| 4 | Generate a new connection string | Neon Dashboard → Connection string |
| 5 | Update `DATABASE_URL` in all environments | Render Dashboard, `.env`, CI secrets |
| 6 | Verify old credential no longer works | Test connection with old string (should fail) |
| 7 | Remove old credential from git history | Use `git filter-branch` or BFG Repo-Cleaner |

## Code changes already made

- `src/lib/db.ts:3` — `process.env.DATABASE_URL` (was hardcoded string)
- `src/lib/db.ts:5-7` — Throws error if `DATABASE_URL` is missing
- `.env.example:2` — Added `DATABASE_URL` placeholder
- `render.yaml:16` — Added `DATABASE_URL` env var (`sync: false`)
- `.github/workflows/ci.yml` — Secret scan detects hardcoded `postgresql://` patterns

## Verification checklist (after rotation)

- [ ] Old credential string rejected by Neon
- [ ] New `DATABASE_URL` works in Render production
- [ ] New `DATABASE_URL` works in CI (secrets updated)
- [ ] New `DATABASE_URL` works in local development
- [ ] No hardcoded `postgresql://` with credentials in tracked files
- [ ] Git history scrubbed of old credential (optional but recommended)

## Risk if not revoked

Attackers with access to the git history (public repository `imtarget05/portfolio`) can obtain the Neon database credentials and potentially read/modify chat session data.
