import getTruyenTranhNet from '../crawlers/getTruyenTranhNet';
import getThichTruyenTranhCom from '../crawlers/getThichTruyenTranhCom';
import getNetTruyenMoiCom from '../crawlers/getNetTruyenMoiCom';

export default async () => {
  const [nettruyenmoiData, truyentranhnetData, thichtruyentranhData] = [
    await getNetTruyenMoiCom(),
    await getTruyenTranhNet(),
    await getThichTruyenTranhCom()
  ];

  return [
    { site: 'nettruyenmoi.com', data: nettruyenmoiData },
    { site: 'truyentranh.net', data: truyentranhnetData },
    { site: 'thichtruyentranh.com', data: thichtruyentranhData }
  ];
};
