# Plan: Update Render Deployment URL

## Issue
The sitemap and robots files reference the old Render URL `https://portfolio-candidate.onrender.com`. Need to update to `https://portfolio-of-mainguyenbinhtan.onrender.com`.

## Files to Update

1. **src/app/sitemap.ts** (line 4):
   - Change `baseUrl` from `'https://portfolio-candidate.onrender.com'` to `'https://portfolio-of-mainguyenbinhtan.onrender.com'`

2. **src/app/robots.ts** (line 9):
   - Change `sitemap` from `'https://portfolio-candidate.onrender.com/sitemap.xml'` to `'https://portfolio-of-mainguyenbinhtan.onrender.com/sitemap.xml'`

## Validation
- Build passes (`npm run build`)
- Verify updated URLs in generated sitemap.xml and robots.txt