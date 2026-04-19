const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:31021', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);

  // Get the HTML of the grid section
  const gridHTML = await page.evaluate(() => {
    const grid = document.querySelector('.grid');
    if (!grid) return 'No grid found';
    return grid.parentElement.outerHTML.substring(0, 2000);
  });
  console.log('Grid parent HTML:', gridHTML);

  // Get computed styles
  const styles = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const results = [];
    sections.forEach((s, i) => {
      const cs = window.getComputedStyle(s);
      const parent = s.parentElement;
      const pcs = parent ? window.getComputedStyle(parent) : null;
      results.push({
        index: i,
        parentTag: parent?.tagName,
        parentClass: parent?.className,
        parentMargin: pcs?.marginLeft + ' / ' + pcs?.marginRight,
        parentWidth: pcs?.width,
        sectionPadding: cs.paddingLeft + ' / ' + cs.paddingRight,
      });
    });
    return results;
  });
  console.log('Section styles:', JSON.stringify(styles, null, 2));

  await browser.close();
})();
