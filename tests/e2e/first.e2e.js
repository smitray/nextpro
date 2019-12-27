describe('Google', () => {
  it('Should display google', async () => {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000');
    await page.waitForSelector('h1');
    const html = await page.$eval('h1', (e) => e.innerHTML);
    expect(html).toBe('Hi this is a test');
  }, 30000);
});
