import _ from 'underscore';
import Promise from 'bluebird';

import Crawler from 'crawler';

export default () => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise((resolve, reject) => {
    crawler.direct({
      uri: 'http://thichtruyentranh.com',
      callback: async (err, res) => {
        if (err) {
          return [];
        }
        const $ = res.$;
        const results = [];
        const listWrapper = $('.ulListruyen')[0];
        listWrapper.children.forEach(child => {
          const mangaNew = {};
          const imgContainer = child.children[0].children[0];
          mangaNew.name = imgContainer.attribs.title;
          mangaNew.link = imgContainer.attribs.href;
          mangaNew.image = imgContainer.children[0].attribs.src;
          mangaNew.chapters = [];

          const newsContent = child.children[1];
          newsContent.children.forEach(child => {
            if (child.name === 'span' && child.children[0].data == 'Chap mới:') {
              mangaNew.chapters.push({
                name: `Chapter ${child.children[1].children[0].data}`,
                link: imgContainer.attribs.href
              });
            }
          });
          if (!_.isEmpty(mangaNew.chapters)) {
            results.push(mangaNew);
          }
        });
        return resolve(results);
      }
    });
  });
};
