import getTruyenTranhNet from '../crawlers/getTruyenTranhNet';
import getThichTruyenTranhCom from '../crawlers/getThichTruyenTranhCom';
import getNetTruyenCom from '../crawlers/getNetTruyenCom';

export default async () => {
  const [nettruyenData, truyentranhnetData, thichtruyentranhData] = [
    await getNetTruyenCom(),
    await getTruyenTranhNet(),
    await getThichTruyenTranhCom()
  ];

  return [
    { site: 'nettruyen.com', data: nettruyenData },
    { site: 'truyentranh.net', data: truyentranhnetData },
    { site: 'thichtruyentranh.com', data: thichtruyentranhData }
  ];
};
