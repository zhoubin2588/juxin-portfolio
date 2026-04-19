const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Check what classes are actually on the page
  await page.goto('http://localhost:38974', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const info = await page.evaluate(() => {
    const allText = document.body.innerText;
    const allClasses = [];
    const allEls = document.querySelectorAll('*');
    allEls.forEach(el => {
      const cls = el.className;
      if (typeof cls === 'string' && cls.includes('max-w')) {
        allClasses.push(cls.substring(0, 150));
      }
    });

    // Get sections
    const sections = document.querySelectorAll('section');
    const sectionInfo = [];
    sections.forEach((s, i) => {
      sectionInfo.push({
        index: i,
        className: s.className.substring(0, 200),
        innerHTML: s.innerHTML.substring(0, 300),
      });
    });

    return { uniqueMaxWClasses: [...new Set(allClasses)], sectionInfo };
  });

  console.log('Max-w classes found:', JSON.stringify(info.uniqueMaxWClasses, null, 2));
  console.log('Sections:', JSON.stringify(info.sectionInfo, null, 2));

  await browser.close();
})();
