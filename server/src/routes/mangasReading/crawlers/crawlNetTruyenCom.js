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
          return reject(err);
        }
      }
    });
  });
};
