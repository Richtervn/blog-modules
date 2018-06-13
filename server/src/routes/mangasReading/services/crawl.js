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

    crawler.direct({
      uri: url,
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
        try {
          form.Name = $('.title-manga')
            .text()
            .split(' ')
            .map(text => toTitleCase(text))
            .join(' ');
          form.Aka = [urlFragToAka(urlFrags[1])];

          const imgSrc = $('.media-left > img').attr('src');
          const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
          const filepath = `./public/Mangas Reading/${filename}`;
          await downloadImg(imgSrc, filepath);
          form.CoverUri = filepath;
          form.Chapter = '1'

          const detail = $('.description-update')
            .text()
            .replace(/\r/g, '')
            .trim()
            .split('\n')
            .map(txt => txt.trim());
          detail.forEach((text, i) => {
            if (text.indexOf('Tên khác') !== -1) {
              const akas = detail[i + 1].replace(/;/g, ',').split(',').concat(form.Aka);
              form.Aka = _.uniq(akas).join(',');
            }
            if (text.indexOf('Thể loại') !== -1) {
              form.Genre = detail[i + 1].replace(/;/g, ',');
            }
            if (text.indexOf('Tác giả') !== -1) {
              const authors = text.replace('Tác giả:', '').trim();
              form.Authors = authors.replace(/;/g, ',');
            }
          });

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

export default async (MangasReading, body) => {
  const siteUrl = body.url
    .replace('http://', '')
    .replace('https://', '')
    .split('/')[0];

  let form;
  switch (siteUrl) {
    case 'truyentranh.net':
      form = await crawlTruyenTranhNet(body.url);
      return form;
    default:
      return form;
  }
};
