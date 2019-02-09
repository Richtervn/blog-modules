import getSite from '../helpers/getSite';

import crawlTruyenTranhNet from '../crawlers/crawlTruyenTranhNet';
import crawlThichTruyenTranh from '../crawlers/crawlThichTruyenTranh';
import crawlNetTruyenCom from '../crawlers/crawlNetTruyenCom';

export default async url => {
  const siteUrl = getSite(url);
  console.log(siteUrl);
  let form;
  switch (siteUrl) {
    case 'truyentranh.net':
      form = await crawlTruyenTranhNet(url);
      return form;
    case 'nettruyen.com':
      form = await crawlNetTruyenCom(url);
      return form;
    case 'thichtruyentranh.com':
      form = await crawlThichTruyenTranh(url);
      return form;
    default:
      return { message: 'Site is not supported yet' };
  }
};

export const sites = ['truyentranh.net', 'nettruyen.com', 'thichtruyentranh.com'];
