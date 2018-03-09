import Promise from 'bluebird';
import fs from 'fs';

export default link => {
  new Promise((resolve, reject) => {
    fs.unlink(link, err => {
      if (err) return reject(err);
      resolve();
    });
  });
};
