import Promise from 'bluebird';

const puppeteer = require('puppeteer-extra');
const cheerio = require('cheerio');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

export default url => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });

      const content = await page.content();
      await page.screenshot({
        fullpage: true,
        path: './example.png'
      });
      const $ = cheerio.load(content);
      resolve({ $, content });
    } catch (e) {
      reject(e);
    }
  });
};
