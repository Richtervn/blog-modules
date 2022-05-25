import getSite from '../helpers/getSite';

import crawlTruyenTranhNet from '../crawlers/crawlTruyenTranhNet';
import crawlThichTruyenTranh from '../crawlers/crawlThichTruyenTranh';
import crawlNetTruyenMoiCom from '../crawlers/crawlNetTruyenMoiCom';

export default async url => {
  const siteUrl = getSite(url);
  console.log(siteUrl);
  let form;
  switch (siteUrl) {
    case 'truyentranh.net':
      form = await crawlTruyenTranhNet(url);
      return form;
    case 'nettruyenco.com':
      form = await crawlNetTruyenMoiCom(url);
      return form;
    case 'thichtruyentranh.com':
      form = await crawlThichTruyenTranh(url);
      return form;
    default:
      return { message: 'Site is not supported yet' };
  }
};

export const sites = ['truyentranh.net', 'nettruyenco.com', 'thichtruyentranh.com'];
