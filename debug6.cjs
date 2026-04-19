const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.route('**/*', route => {
    route.continue({ headers: { ...route.request().headers(), 'Cache-Control': 'no-cache, no-store' } });
  });

  await page.goto('http://localhost:48672', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const headerInfo = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return 'No header';
    const rect = header.getBoundingClientRect();
    const cs = window.getComputedStyle(header);
    return {
      height: rect.height,
      offsetTop: rect.top,
      position: cs.position,
      zIndex: cs.zIndex,
    };
  });
  console.log('Header info:', JSON.stringify(headerInfo, null, 2));

  // Also check if section has pt-28 class
  const sectionInfo = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const first = sections[0];
    if (!first) return 'No section';
    const cs = window.getComputedStyle(first);
    const rect = first.getBoundingClientRect();
    return {
      paddingTop: cs.paddingTop,
      rectTop: rect.top,
      className: first.className.substring(0, 200),
    };
  });
  console.log('Section info:', JSON.stringify(sectionInfo, null, 2));

  await browser.close();
})();
