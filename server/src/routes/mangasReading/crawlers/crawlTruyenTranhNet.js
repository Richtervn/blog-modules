import _ from 'underscore';
import Promise from 'bluebird';
import Crawler from 'crawler';
import moment from 'moment';

import downloadImg from '../helpers/downloadImg';
import toTitleCase from '../helpers/toTitleCase';
import urlFragToAka from '../helpers/urlFragToAka';

export default url => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise((resolve, reject) => {
    let form = {};

    const urlFrags = url.replace('http://', '').replace('https://', '').split('/');

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
          let name = $('.detail-manga-title').text();
          if (name) {
            form.Name = name
              .trim()
              .split(' ')
              .map(text => toTitleCase(text))
              .join(' ');
          } else {
            return reject({ message: 'Failed to crawl manga name' });
          }

          form.Aka = [urlFragToAka(urlFrags[1])];

          const imgSrc = $('.card-img').attr('src');
          if (!imgSrc) {
            return reject({ message: 'Failed to crawl cover image' });
          }
          const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
          const filepath = `./public/Mangas Reading/${filename}`;
          await downloadImg(imgSrc, filepath);
          form.CoverUri = filepath;
          form.Chapter = '1';

          let detail = $('.detail-manga-intro').text();
          if (!detail) {
            return reject({ message: 'Failed to crawl manga detail' });
          }

          form.Introduce = detail.trim();
          form.ReadingUrl = url;
          form.Rating = 3;

          const genres = [];
          const genresElem = $('.detail-manga-category')[0];
          if (genresElem) {
            genresElem.children
              .filter(child => child.name === 'a')
              .forEach(aTag => {
                if (aTag.children && aTag.children[0]) {
                  genres.push(aTag.children[0].data.trim());
                }
              });
          }
          form.Genre = genres.join(',');

          const infoList = $('.detail-banner-info > ul')[0];
          form.Authors = '';
          if (infoList) {
            const infoItem = infoList.children
              .filter(child => child.name === 'li')
              .filter(liTag => !liTag.attribs.class);
            if (infoItem) {
              const infoText = $(infoItem).text();
              const infoFrags = infoText
                .split('\n')
                .map(l => l.trim())
                .filter(Boolean);
              const authorTitleIndex = infoFrags.indexOf('Tác giả:');
              if (authorTitleIndex != -1) {
                const author = infoFrags[authorTitleIndex + 1];
                if (author !== 'Đang Cập Nhật...') {
                  form.Authors = author;
                }
              }
            }
          }

          form.Aka = form.Aka.join(',');

          return resolve(form);
        } catch (e) {
          return reject(e);
        }
      }
    });
  });
};
