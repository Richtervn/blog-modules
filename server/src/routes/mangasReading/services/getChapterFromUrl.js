import _ from 'underscore';

const toTitleCase = srcString => srcString.charAt(0).toUpperCase() + srcString.slice(1, srcString.length);
const urlFragToAka = urlFrag =>
  urlFrag
    .split('-')
    .map(frag => toTitleCase(frag))
    .join(' ');

export default url => {
  const urlFrags = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('.html', '')
    .replace('www.', '')
    .split('/');
  const site = urlFrags[0].replace('www.', '');
  let mangaAka, chapter;

  switch (site) {
    case 'blogtruyen.com': {
      let infoUrlFrags = urlFrags[2].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }
    case 'doctruyen.tv': {
      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3].split('-')[1];
      break;
    }
    case 'truyendoc.info': {
      let infoUrlFrags = urlFrags[3].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }
    // Ex: domain/aka/aka-chap-3
    case 'thichtruyentranh.com': {
      mangaAka = urlFragToAka(urlFrags[1]);
      chapter = urlFrags[2].split('-chap-')[1].split('-')[0];
      break;
    }
    // Ex: domain/aka/chap-3
    case 'truyentranh.net': {
      mangaAka = urlFragToAka(urlFrags[1]);
      chapter = urlFrags[2].split('-')[1];
      break;
    }
    case 'mangak.info':
    case 'truyentranhtam.com':
    case 'truyentranhth.net':
    case 'truyentranh8.org':
    case 'truyentranh8.net': {
      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
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
    case 'truyenchon.com':
    case 'nettruyen.com': {
      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3].replace('chap-', '');
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

  return { mangaAka, chapter };
};
