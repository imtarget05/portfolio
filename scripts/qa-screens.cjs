/* Visual QA screenshots: desktop/mobile x light/dark x hero/sections */
const { chromium } = require('playwright-core');
const path = require('path');
const os = require('os');

const EXEC = path.join(
  os.homedir(),
  'Library/Caches/ms-playwright/chromium-1187/chrome-mac/Chromium.app/Contents/MacOS/Chromium'
);

(async () => {
  const browser = await chromium.launch({ executablePath: EXEC, headless: true });
  const scenes = [
    { name: 'desktop-light', vp: { width: 1440, height: 900 }, colorScheme: 'light' },
    { name: 'desktop-dark', vp: { width: 1440, height: 900 }, colorScheme: 'dark' },
    { name: 'mobile-light', vp: { width: 390, height: 844 }, colorScheme: 'light' },
    { name: 'mobile-dark', vp: { width: 390, height: 844 }, colorScheme: 'dark' },
  ];
  const outDir = path.join(__dirname, 'qa');
  const errors = [];
  for (const s of scenes) {
    const ctx = await browser.newContext({
      viewport: s.vp,
      colorScheme: s.colorScheme,
      deviceScaleFactor: 2,
      hasTouch: s.vp.width < 800,
    });
    const page = await ctx.newPage();
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`[${s.name}] console: ${m.text()}`);
    });
    page.on('pageerror', (e) => errors.push(`[${s.name}] pageerror: ${e.message}`));
    await page.goto('http://localhost:3111', { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: path.join(outDir, `${s.name}-hero.png`) });
    // scroll to projects
    await page.evaluate(() => document.querySelector('#projects')?.scrollIntoView());
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(outDir, `${s.name}-projects.png`) });
    await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView());
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(outDir, `${s.name}-contact.png`) });
    await ctx.close();
  }
  await browser.close();
  console.log(errors.length ? 'CONSOLE/PAGE ERRORS:\n' + errors.join('\n') : 'NO CONSOLE ERRORS');
})();
