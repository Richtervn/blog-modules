import _ from 'underscore';
import Promise from 'bluebird';
// import moment from 'moment';
// import request from 'request';
// import fs from 'fs';
import Crawler from 'crawler';

const crawler = new Crawler({ maxConnections: 1 });

const getTruyenTranhNet = () =>
  new Promise((resolve, reject) => {
    crawler.direct({
      uri: 'http://truyentranh.net',
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
        const results = [];
        const cards = $('.media.mainpage-manga');
        for(let i = 0; i < cards.length; i++){
          if(!cards[i].children){
            continue;
          }

            // console.log(cards[i].children);
          for(let j = 0; j < cards[i].children.length; j++){
            const elem = cards[i].children[j];
            if(!elem.attribs){
              continue;
            }
            console.log(elem.attribs.class);
          }
          
        }
        return resolve(res);
      },
    });
  });

export default async () => {
  const res = await getTruyenTranhNet();
  return res;
};
