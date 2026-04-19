
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:31021', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots\\home.png' });
  console.log('Homepage saved');

  await page.click('a[href*="/category/"]');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots\\category.png' });
  console.log('Category saved');

  await browser.close();
})();
