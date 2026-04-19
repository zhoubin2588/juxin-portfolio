const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.route('**/*', route => {
    route.continue({ headers: { ...route.request().headers(), 'Cache-Control': 'no-cache, no-store' } });
  });

  await page.goto('http://localhost:48672', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots/final_fix_home.png', fullPage: true });
  console.log('Home saved');

  await page.goto('http://localhost:48672/category/mentou', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots/final_fix_cat.png' });
  console.log('Category saved');

  await browser.close();
})();
