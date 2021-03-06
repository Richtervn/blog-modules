import _ from 'underscore';
import Promise from 'bluebird';

import Crawler from 'crawler';

export default () => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise((resolve, reject) => {
    crawler.direct({
      uri: 'https://www.nettruyen.com',
      callback: async (err, res) => {
        if (err) {
          return [];
        }
        const $ = res.$;
        const results = [];
        const cards = $('figure.clearfix');
        for (let i = 0; i < cards.length; i++) {
          const mangaNew = {};
          cards[i].children.forEach(child => {
            if (child.attribs && child.attribs.class == 'image') {
              const imgContainer = child.children.filter(gchild => gchild.name == 'a')[0];
              mangaNew.name = imgContainer.attribs.title.replace('Truyện tranh', '');
              mangaNew.link = imgContainer.attribs.href;
              const imgElem = imgContainer.children.filter(child => child.name == 'img')[0];
              mangaNew.image = imgElem.attribs['data-original'];
            }
            if (child.name == 'figcaption') {
              mangaNew.chapters = [];
              const infoContainer = child.children.filter(gchild => gchild.name == 'ul')[0];
              infoContainer.children
                .filter(gchild => gchild.name == 'li')
                .map(gchild => gchild.children.filter(schild => schild.name == 'a')[0])
                .forEach(schild => {
                  mangaNew.chapters.push({
                    name: schild.children[0].data.trim(),
                    link: schild.attribs.href
                  });
                });
            }
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
