import Promise from 'bluebird';
import Crawler from 'crawler';

export default url => {
  const crawler = new Crawler({ maxConnections: 1 });
  return new Promise((resolve, reject) => {
    crawler.direct({
      uri: url,
      callback: async (err, res) => {
        if (err) {
          return reject(err);
        }
        const $ = res.$;
        resolve({ $, response: res });
      }
    });
  });
};
