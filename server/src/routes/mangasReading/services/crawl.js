import _ from 'underscore';
import Promise from 'bluebird';
import moment from 'moment';
import request from 'request';
import fs from 'fs';
import Crawler from 'crawler';

const crawler = new Crawler({ maxConnections: 1 });

const toTitleCase = srcString => srcString.charAt(0).toUpperCase() + srcString.slice(1, srcString.length).toLowerCase();
const urlFragToAka = urlFrag =>
  urlFrag
    .split('-')
    .map(frag => toTitleCase(frag))
    .join(' ');

const downloadImg = (url, filePath) =>
  new Promise((resolve, reject) =>
    request(url)
      .pipe(fs.createWriteStream(filePath))
      .on('close', resolve)
  );

const crawlTruyenTranhNet = url =>
  new Promise((resolve, reject) => {
    let form = {};

    const urlFrags = url
      .replace('http://', '')
      .replace('https://', '')
      .split('/');

    const requestUrl = url
      .split('/')
      .filter((frag, i) => i <= 3)
      .join('/');

    crawler.direct({
      uri: requestUrl,
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
        try {
          let name = $('.title-manga').text();
          if (name) {
            form.Name = name
              .split(' ')
              .map(text => toTitleCase(text))
              .join(' ');
          } else {
            return reject({ message: 'Failed to crawl manga name' });
          }

          form.Aka = [urlFragToAka(urlFrags[1])];

          const imgSrc = $('.media-left > img').attr('src');
          if (!imgSrc) {
            return reject({ message: 'Failed to crawl cover image' });
          }
          const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
          const filepath = `./public/Mangas Reading/${filename}`;
          await downloadImg(imgSrc, filepath);
          form.CoverUri = filepath;
          form.Chapter = '1';

          let detail = $('.description-update').text();
          if (!detail) {
            return reject({ message: 'Failed to crawl manga detail' });
          }

          detail = detail
            .replace(/\r/g, '')
            .trim()
            .split('\n')
            .map(txt => txt.trim());

          detail.forEach((text, i) => {
            if (text.indexOf('Tên khác') !== -1) {
              const akas = detail[i + 1]
                .replace(/;/g, ',')
                .split(',')
                .concat(form.Aka);
              form.Aka = _.uniq(akas);
            }
            if (text.indexOf('Thể loại') !== -1) {
              form.Genre = detail[i + 1].replace(/;/g, ',');
            }
            if (text.indexOf('Tác giả') !== -1) {
              const authors = text.replace('Tác giả:', '').trim();
              form.Authors = authors.replace(/;/g, ',');
            }
          });

          form.Aka = form.Aka.join(',');
          form.Introduce = $('.manga-content p:nth-of-type(2)').text();
          form.ReadingUrl = url;
          form.Rating = 3;

          return resolve(form);
        } catch (e) {
          return reject(e);
        }
      }
    });
  });

const crawlNetTruyenCom = url =>
  new Promise((resolve, reject) => {
    let form = {};

    const requestUrl = url
      .split('/')
      .filter((frag, i) => i <= 4)
      .join('/');

    const urlFrags = url
      .replace('http://', '')
      .replace('https://', '')
      .split('/');

    crawler.direct({
      uri: requestUrl,
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
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
            let akas = otherNames
              .replace(/;/g, ',')
              .split(',')
              .concat(form.Aka);
            form.Aka = _.uniq(akas);
          }

          const imgSrc = $('.col-image > img').attr('src');
          if (!imgSrc) {
            return reject({ message: 'Failed to crawl cover image' });
          }
          const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
          const filepath = `./public/Mangas Reading/${filename}`;
          await downloadImg(imgSrc, filepath);
          form.CoverUri = filepath;
          form.Chapter = '1';

          let authors = $('.author > .col-xs-8').text();
          if (authors) {
            form.Authors = authors.replace(/;/g, ',');
          }

          let genres = $('.kind > .col-xs-8').text();
          if (genres) {
            form.Genre = genres.replace(/ - /g, ',');
          }

          form.Aka = form.Aka.join(',');
          form.Introduce = $('.detail-content > p').text();
          form.ReadingUrl = url;
          form.Rating = 3;

          return resolve(form);
        } catch (e) {
          return reject(err);
        }
      }
    });
  });

export default async (MangasReading, body) => {
  const siteUrl = body.url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('/')[0];

  let form;
  switch (siteUrl) {
    case 'truyentranh.net':
      form = await crawlTruyenTranhNet(body.url);
      return form;
    case 'nettruyen.com':
      form = await crawlNetTruyenCom(body.url);
      return form;
    default:
      return { message: 'Site is not supported yet' };
  }
};
