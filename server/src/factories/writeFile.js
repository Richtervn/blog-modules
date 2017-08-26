import fs from 'fs';
import Promise from 'bluebird';

export default (link, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(link, content, err => {
      if (err) return reject(err);
      resolve(content);
    });
  });
