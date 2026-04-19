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

  const cssInfo = await page.evaluate(() => {
    const sheets = document.styleSheets;
    const results = [];
    for (const sheet of sheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText && rule.selectorText.includes('pt-28')) {
            results.push(`${rule.selectorText} { ${rule.cssText.substring(rule.cssText.indexOf('{')) }`);
          }
        }
      } catch(e) {}
    }
    // Also check computed style directly
    const section = document.querySelector('section');
    const cs = window.getComputedStyle(section);
    results.push(`computed paddingTop: ${cs.paddingTop}`);
    results.push(`section className: ${section.className}`);
    return results;
  });
  console.log(cssInfo.join('\n'));

  await browser.close();
})();
