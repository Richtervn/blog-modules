import _ from 'underscore';
import Promise from 'bluebird';

import Crawler from 'crawler';

export default () => {
  const crawler = new Crawler({ maxConnections: 1 });

  return new Promise((resolve, reject) => {
    crawler.direct({
      uri: 'http://truyentranh.net',
      callback: async (err, res) => {
        if (err) {
          return [];
        }
        const $ = res.$;
        const results = [];
        const cards = $('.card');

        for (let i = 0; i < cards.length; i++) {
          if (!cards[i].children) {
            continue;
          }

          const mangaNew = {};

          const aTag = cards[i].children.find(child => child.name === 'a');
          if (aTag) {
            mangaNew.link = aTag.attribs.href;
            mangaNew.name = aTag.attribs.title;
            const imageTag = aTag.children.find(child => child.name === 'img');
            if (imageTag) {
              mangaNew.image = imageTag.attribs.src;
            }
          }

          const cardBody = cards[i].children.find(
            child => child.attribs && child.attribs.class === 'card-body'
          );
          if (!cardBody) {
            continue;
          }

          const chapterWrapper = cardBody.children.find(
            child => child.attribs && child.attribs.class === 'card-chapter-hp'
          );
          if (!chapterWrapper) {
            continue;
          }

          const chapterList = chapterWrapper.children.find(
            child => child.attribs && child.attribs.class === 'list-chapter'
          );
          if (!chapterList) {
            continue;
          }

          mangaNew.chapters = [];
          chapterList.children
            .filter(child => child.name === 'li')
            .forEach(liTag => {
              liTag.children.forEach(child => {
                if (child.name === 'a') {
                  mangaNew.chapters.push({
                    name: child.children[0].data.trim(),
                    link: child.attribs.href
                  });
                }
              });
            });

          if (!_.isEmpty(mangaNew.chapters)) {
            results.push(mangaNew);
          }
        }
        return resolve(results);
      }
    });
  });
};
