const puppeteer = require('puppeteer');

describe('Google', () => {
  it('Should display google', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      args: [
        '--start-maximized'
      ]
    });
    const page = await browser.newPage();

    // await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://google.com');
    await expect(page).toMatch('google');
    browser.close();
  }, 30000);
});
