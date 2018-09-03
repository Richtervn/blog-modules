import _ from 'underscore';
import Promise from 'bluebird';

import Crawler from 'crawler';

const getTruyenTranhNet = () => {
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
        const cards = $('.media.mainpage-manga');

        for (let i = 0; i < cards.length; i++) {
          if (!cards[i].children) {
            continue;
          }

          const mangaNew = {};
          for (let j = 0; j < cards[i].children.length; j++) {
            const elem = cards[i].children[j];
            if (!elem.attribs) {
              continue;
            }

            if (elem.attribs.class == 'media-left cover-manga') {
              const imgContainer = elem.children.filter(child => child.name == 'a')[0];
              mangaNew.link = imgContainer.attribs.href;
              const imgElem = imgContainer.children.filter(child => child.name == 'img')[0];
              mangaNew.image = imgElem.attribs.src;
            }

            if (elem.attribs.class == 'media-body') {
              elem.children.forEach(child => {
                if (child.name == 'a') {
                  mangaNew.name = child.attribs.title;
                }
                if (child.attribs && child.attribs.class == 'row') {
                  mangaNew.chapters = [];
                  const infoContainer = child.children
                    .filter(gchild => gchild.attribs && gchild.attribs.class == 'col-xs-6')
                    .map(
                      gchild =>
                        gchild.children.filter(schild => schild.attribs && schild.attribs.class == 'hotup-list')[0]
                    )[0];

                  infoContainer.children.filter(schild => schild.name == 'a').forEach(schild => {
                    mangaNew.chapters.push({
                      name: schild.children[0].data.trim(),
                      link: schild.attribs.href
                    });
                  });
                }
              });
            }

            if (!_.isEmpty(mangaNew.chapters)) {
              results.push(mangaNew);
            }
          }
        }
        return resolve(results);
      }
    });
  });
};

const getNetTruyenCom = () => {
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

const getThichTruyenTranhCom = () => {
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

export default async () => {
  const [nettruyenData, truyentranhnetData, thichtruyentranhData] = [
    await getNetTruyenCom(),
    await getTruyenTranhNet(),
    await getThichTruyenTranhCom()
  ];

  return [
    { site: 'nettruyen.com', data: nettruyenData },
    { site: 'truyentranh.net', data: truyentranhnetData },
    { site: 'thichtruyentranh.com', data: thichtruyentranhData }
  ];
};