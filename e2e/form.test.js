const puppeteer = require ('puppeteer');

jest.setTimeout(30000); // default puppeteer timeout

describe('Form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: false, // show devTools
      // defaultViewport: {
      //   width: 1000,
      //   height: 1000,
      // },
    });

    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Input 4485194404532589 should be Visa payment system', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.form');

    const form = await page.$('.form');
    const input = await form.$('.form__input');
    const button = await form.$('.form__button');

    await input.type('4485194404532589');
    await button.click();

    expect(await page.$eval('.form__tooltip', (elem) => elem.textContent)).toBe('Visa');
  });

  test('Invalid input', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.form');

    const form = await page.$('.form');
    const input = await form.$('.form__input');
    const button = await form.$('.form__button');

    await input.type('5020608794753082');
    await button.click();

    expect(await page.$eval('.form__tooltip', (elem) => elem.textContent)).toBe('Платежная система не определена!');
  });
});
