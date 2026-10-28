const { chromium } = require('playwright-core');
const path = require('path');
const os = require('os');

const EXEC = path.join(
  os.homedir(),
  'Library/Caches/ms-playwright/chromium-1187/chrome-mac/Chromium.app/Contents/MacOS/Chromium'
);
const HTML = '/Users/mainguyenbinhtan/Downloads/__vidframes_viewer.html';
const fs = require('fs');
fs.writeFileSync(HTML, `<!doctype html><body style="margin:0"><video id="v" src="./1792924486761_286649500849761444_8599634965697542662.mp4" muted playsinline controls></video><br><span id="s">x</span></body>`);

(async () => {
  const browser = await chromium.launch({ executablePath: EXEC, headless: true, args: ['--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage();
  page.on('console', (m) => console.log('[c]', m.type(), m.text()));
  try {
    await page.goto('file://' + encodeURI(HTML), { timeout: 20000 });
    await page.waitForTimeout(4000);
    const info = await page.evaluate(() => {
      const v = document.getElementById('v');
      v.play().catch((e) => document.getElementById('s').textContent = 'playerr ' + e.message);
      return new Promise((r) => setTimeout(() => r({
        readyState: v.readyState,
        duration: v.duration,
        err: v.error && v.error.message,
        networkState: v.networkState,
        canPlayH264: !!window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E"'),
      }), 1500));
    });
    console.log(JSON.stringify(info, null, 2));
  } catch (e) { console.error('ERR', e.message); }
  await browser.close();
})();
