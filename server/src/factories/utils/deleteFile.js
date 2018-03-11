import Promise from 'bluebird';
import fs from 'fs';

export default link => {
  new Promise((resolve, reject) => {
    if (!fs.existsSync(link)) {
      return resolve();
    }

    fs.unlink(link, err => {
      if (err) return reject(err);
      resolve();
    });
  });
};
