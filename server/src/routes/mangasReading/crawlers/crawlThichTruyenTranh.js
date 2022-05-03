import Promise from 'bluebird';
import Crawler from 'crawler';
import moment from 'moment';

import downloadImg from '../helpers/downloadImg';
import urlFragToAka from '../helpers/urlFragToAka';

export default url => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise((resolve, reject) => {
    let form = { Authors: [], Genre: [], Aka: [], Rating: 3 };

    const urlFrags = url.replace('http://', '').replace('https://', '').split('/');

    crawler.direct({
      uri: url,
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
        try {
          const imgWrapper = $('.divthum2')[0].children[0];

          form.Name = imgWrapper.attribs.title;
          const imgSrc = imgWrapper.children[0].attribs.src;

          if (!imgSrc) {
            return reject({ message: 'Failed to crawl cover image' });
          }
          const filename = `${moment().format('MMDDYYYYhhmmss')}.jpg`;
          const filepath = `./public/Mangas Reading/${filename}`;
          await downloadImg(imgSrc, filepath);
          form.CoverUri = filepath;

          const detailWrapper = $('.ullist_item')[0];
          detailWrapper.children.forEach(detailRow => {
            const label = detailRow.children[0].children[0].data;
            if (label == 'Tác giả') {
              detailRow.children[1].children.forEach(elem => {
                if (elem.type != 'tag') {
                  return;
                }
                form.Authors.push(elem.attribs.title);
              });
            }
            if (label == 'Thể loại') {
              detailRow.children[1].children.forEach(elem => {
                if (elem.type != 'tag') {
                  return;
                }
                form.Genre.push(elem.attribs.title);
              });
            }
            if (label == 'Tên khác') {
              const akas = detailRow.children[1].children[0].data;
              form.Aka = akas.replace(': ', '').split(';');
            }
          });

          form.Introduce = $('.p_Content')[0].next.children[0].data;
          form.Chapter = '1';
          form.Aka.push(urlFragToAka(urlFrags[1]));

          form.Aka = form.Aka.join(',');
          form.Genre = form.Genre.join(',');
          form.Authors = form.Authors.join(',');

          return resolve(form);
        } catch (e) {
          return reject(e);
        }
      }
    });
  });
};
