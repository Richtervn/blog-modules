import _ from 'underscore';

const toTitleCase = srcString => srcString.charAt(0).toUpperCase() + srcString.slice(1, srcString.length);
const urlFragToAka = urlFrag =>
  urlFrag
    .split('-')
    .map(frag => toTitleCase(frag))
    .join(' ');

export default async (MangasReading, body) => {
  const { url } = body;
  const urlFrags = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('.html', '')
    .split('/');
  const site = urlFrags[0].replace('www.', '');
  let mangaAka, chapter;

  switch (site) {
    case 'truyentranh.net': {
      mangaAka = urlFragToAka(urlFrags[1]);
      chapter = urlFrags[2].split('-')[1];
      break;
    }
    case 'truyentranh8.net': {
      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }
    case 'nettruyen.com': {
      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3].replace('chap-', '');
      break;
    }
    case 'truyenqq.com': {
      let infoUrlFrags = urlFrags[2].split('-chap-');
      mangaAka = _.initial(infoUrlFrags[0].split('-'))
        .map(frag => toTitleCase(frag))
        .join(' ');
      chapter = infoUrlFrags[1];
      break;
    }
    case 'vuidoctruyen.com': {
      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0].replace('doc-truyen-', ''));
      chapter = infoUrlFrags[1].split('-')[0];
      break;
    }
    case 'vuidu.com': {
      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3];
      break;
    }
  }

  let manga = await MangasReading.findOne({ Aka: mangaAka });
  if (!manga) return { message: 'This manga is not added to tracking' };
  manga.Chapter = chapter;
  manga.ReadingUrl = url;
  const result = await manga.save();
  return result;
};
