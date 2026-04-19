const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:51421', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);

  // Get all buttons/cards
  const html = await page.evaluate(() => {
    // Get body inner HTML, focusing on the lower section
    const body = document.body.innerHTML;
    // Find all sections
    const sections = document.querySelectorAll('section');
    const result = [];
    sections.forEach((s, i) => {
      result.push(`--- Section ${i} ---`);
      result.push(s.outerHTML.substring(0, 500));
      result.push('');
    });
    return result.join('\n');
  });
  console.log(html);

  await browser.close();
})();
