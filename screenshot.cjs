const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:38974', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots/final_home.png', fullPage: true });
  console.log('Homepage saved');

  await page.goto('http://localhost:38974/category/mentou', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'G:/Users/Administrator/Documents/lingxi-claw/20260418-09-49-48/screenshots/final_category.png' });
  console.log('Category page saved');

  await browser.close();
})();
