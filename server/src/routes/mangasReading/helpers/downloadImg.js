import Promise from 'bluebird';
import fs from 'fs';
import request from 'request';

const ensureUrl = url => {
  if (url.startsWith('//')) {
    return url.replace('//', 'http://');
  }
  return url;
};

export default (url, filePath) =>
  new Promise((resolve, reject) =>
    request(ensureUrl(url)).pipe(fs.createWriteStream(filePath)).on('close', resolve)
  );
