const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.route('**/*', route => {
    const headers = { ...route.request().headers(), 'Cache-Control': 'no-cache, no-store' };
    route.continue({ headers });
  });

  await page.goto('http://localhost:48672', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);

  // Check if max-w-container class is applied and what its computed style is
  const info = await page.evaluate(() => {
    const container = document.querySelector('.max-w-container');
    if (!container) return { found: false };

    const cs = window.getComputedStyle(container);
    return {
      found: true,
      tag: container.tagName,
      className: container.className,
      maxWidth: cs.maxWidth,
      marginLeft: cs.marginLeft,
      marginRight: cs.marginRight,
      width: cs.width,
      paddingLeft: cs.paddingLeft,
      paddingRight: cs.paddingRight,
    };
  });
  console.log(JSON.stringify(info, null, 2));

  await browser.close();
})();
