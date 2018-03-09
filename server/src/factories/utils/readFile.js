import fs from 'fs';
import Promise from 'bluebird';

export default link =>
  new Promise((resolve, reject) => {
    fs.readFile(link, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
