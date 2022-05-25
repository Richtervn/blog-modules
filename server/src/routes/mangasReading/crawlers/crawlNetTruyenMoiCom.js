import _ from 'underscore';
import Promise from 'bluebird';
import Crawler from 'crawler';
import moment from 'moment';

import downloadImg from '../helpers/downloadImg';
import toTitleCase from '../helpers/toTitleCase';
import urlFragToAka from '../helpers/urlFragToAka';

const puppeteer = require('puppeteer-extra');
const cheerio = require('cheerio');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

export default url => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise(async (resolve, reject) => {
    let form = {};

    const requestUrl = url
      .split('/')
      .filter((frag, i) => i <= 4)
      .join('/');

    const urlFrags = url.replace('http://', '').replace('https://', '').split('/');

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(requestUrl, { waitUntil: 'networkidle2' });

    const content = await page.content();
    const $ = cheerio.load(content);

    try {
      let name = $('.title-detail').text();
      if (name) {
        form.Name = name
          .split(' ')
          .map(text => toTitleCase(text))
          .join(' ');
      } else {
        return reject({ message: 'Failed to crawl manga name' });
      }

      form.Aka = [urlFragToAka(urlFrags[2])];

      let otherNames = $('.other-name').text();
      if (otherNames) {
        let akas = otherNames.replace(/;/g, ',').split(',').concat(form.Aka);
        form.Aka = _.uniq(akas);
      }

      const imgSrc = $('.col-image > img').attr('src');

      if (!imgSrc) {
        return reject({ message: 'Failed to crawl cover image' });
      }
      const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
      const filepath = `./public/Mangas Reading/${filename}`;

      await downloadImg(imgSrc, filepath);
      console.log('downloading', imgSrc, filepath);

      form.CoverUri = filepath;
      form.Chapter = '1';

      let authors = $('.author > .col-xs-8').text();
      if (authors) {
        form.Authors = authors.replace(/;/g, ',');
      }

      let genres = $('.kind > .col-xs-8').text();
      form.Genre = '';
      if (genres) {
        form.Genre = genres.replace(/ - /g, ',');
      }

      form.Aka = form.Aka.join(',');
      form.Introduce = $('.detail-content > p').text();
      form.ReadingUrl = url;
      form.Rating = 3;

      return resolve(form);
    } catch (e) {
      return reject(e);
    }
  });
};
