const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:51421', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);

  // Get the grid section HTML
  const html = await page.evaluate(() => {
    // Find the section containing category cards
    const sections = document.querySelectorAll('section');
    for (const s of sections) {
      if (s.querySelector('.card-hover')) {
        return s.outerHTML.substring(0, 3000);
      }
    }
    return 'not found';
  });
  console.log('Grid section HTML:');
  console.log(html);

  // Get styles of the grid parent
  const styleInfo = await page.evaluate(() => {
    const cards = document.querySelectorAll('.card-hover');
    if (cards.length === 0) return 'No cards found';
    const parent = cards[0].closest('section') || cards[0].parentElement?.parentElement;
    if (!parent) return 'No parent section';

    let el = cards[0];
    const chain = [];
    while (el && chain.length < 6) {
      const cs = window.getComputedStyle(el);
      chain.push({
        tag: el.tagName,
        class: el.className.substring(0, 100),
        width: cs.width,
        marginLeft: cs.marginLeft,
        marginRight: cs.marginRight,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
      });
      el = el.parentElement;
    }
    return chain;
  });
  console.log('Style chain:');
  console.log(JSON.stringify(styleInfo, null, 2));

  await browser.close();
})();
