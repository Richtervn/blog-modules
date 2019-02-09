import Promise from 'bluebird';
import fs from 'fs';
import request from 'request';

export default (url, filePath) =>
  new Promise((resolve, reject) =>
    request(url)
      .pipe(fs.createWriteStream(filePath))
      .on('close', resolve)
  );
