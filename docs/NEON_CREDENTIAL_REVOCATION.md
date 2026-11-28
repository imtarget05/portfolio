# Neon Credential Revocation Documentation

## Issue
Neon PostgreSQL credential was exposed in the repository history. Need to revoke old credentials and generate new ones.

## Action Items
1. [ ] Revoke old Neon password/connection string
2. [ ] Generate new Neon database connection string
3. [ ] Update `.env.example` with new placeholder
4. [ ] Add Neon credential to GitHub Secrets (if using in CI)
5. [ ] Verify old connections are no longer valid
6. [ ] Test new connection string

## Current Status
- Old `DATABASE_URL` in git history: `postgresql://user:password@host.neon.tech/dbname?sslmode=require`
- `.env` currently contains placeholder: `DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy`
- `.env.example` updated with security warnings
- `.gitignore` includes `.env` file

## Next Steps
1. Generate new Neon database credentials via Neon Dashboard
2. Update `.env` with new connection string (for local development only)
3. If using in GitHub Actions, add to repository secrets
4. Document in team onboarding material