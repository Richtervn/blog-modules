import _ from 'underscore';

import toTitleCase from '../helpers/toTitleCase';
import urlFragToAka from '../helpers/urlFragToAka';
import getUrlFrags from '../helpers/getUrlFrags';

const message = 'Incorrect reading link';

export default url => {
  const urlFrags = getUrlFrags(url);
  const site = urlFrags[0].replace('www.', '');
  let mangaAka, chapter;

  switch (site) {
    case 'blogtruyen.com': {
      if (!urlFrags[2]) return { message };

      let infoUrlFrags = urlFrags[2].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }

    case 'doctruyen.tv': {
      if (!urlFrags[2] || !urlFrags[3]) return { message };

      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3].split('-')[1];
      break;
    }

    case 'truyendoc.info': {
      if (!urlFrags[3]) return { message };

      let infoUrlFrags = urlFrags[3].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }

    // Ex: domain/aka/aka-chap-3 && domain/aka/chapter-3-...
    case 'thichtruyentranh.com': {
      if (!urlFrags[1] || !urlFrags[2]) return { message };

      mangaAka = urlFragToAka(urlFrags[1]);
      const frags = urlFrags[2].split('-');
      if (frags.indexOf('chap') != -1) {
        chapter = frags[frags.indexOf('chap') + 1];
      }
      if (frags.indexOf('chapter') != -1) {
        chapter = frags[frags.indexOf('chapter') + 1];
      }
      break;
    }

    // Ex: domain/aka/chap-3
    case 'truyentranh.net': {
      if (!urlFrags[1] || !urlFrags[2]) return { message };

      mangaAka = urlFragToAka(urlFrags[1]);
      chapter = urlFrags[2].split('-')[1];
      break;
    }
    // Ex: domain/aka/truyen-tranh-aka-chap-3.html
    case 'truyentranhth.net': {
      if (!urlFrags[1]) return { message };

      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0].replace('truyen-tranh-', ''));
      chapter = infoUrlFrags[1].replace('.html', '');
      break;
    }

    // Ex: domain/aka-chap-3
    case 'mangak.info':
    case 'truyentranh869.com':
    case 'truyentranhtam.com':
    case 'truyentranh8.org':
    case 'truyentranh8.net': {
      if (!urlFrags[1]) return { message };

      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }

    case 'truyenqq.com': {
      if (!urlFrags[2]) return { message };

      let infoUrlFrags = urlFrags[2].split('-chap-');
      mangaAka = _.initial(infoUrlFrags[0].split('-'))
        .map(frag => toTitleCase(frag))
        .join(' ');
      chapter = infoUrlFrags[1];
      break;
    }

    case 'truyenchon.com':
    case 'nettruyenco.com':
    case 'nettruyenmoi.com': {
      if (!urlFrags[2] || !urlFrags[3]) return { message };

      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3].replace('chap-', '');
      break;
    }

    case 'vuidoctruyen.com': {
      if (!urlFrags[1]) return { message };

      let infoUrlFrags = urlFrags[1].split('-chap-');
      mangaAka = urlFragToAka(infoUrlFrags[0].replace('doc-truyen-', ''));
      chapter = infoUrlFrags[1].split('-')[0];
      break;
    }

    case 'vuidu.com': {
      if (!urlFrags[2] || !urlFrags[2]) return { message };

      mangaAka = urlFragToAka(urlFrags[2]);
      chapter = urlFrags[3];
      break;
    }
    //Ex: domain/DocTruyen/id/aka_Chap_3
    case 'otakusan.net': {
      if (!urlFrags[3]) return { message };

      let infoUrlFrags = urlFrags[3].split('_Chap_');
      mangaAka = urlFragToAka(infoUrlFrags[0]);
      chapter = infoUrlFrags[1];
      break;
    }
    default: {
      return { message: 'Site is not supported' };
    }
  }

  return { mangaAka, chapter };
};

export const sites = [
  'blogtruyen.com',
  'doctruyen.tv',
  'truyendoc.info',
  'thichtruyentranh.com',
  'truyentranh.net',
  'truyentranhth.net',
  'mangak.info',
  'truyentranh869.com',
  'truyentranhtam.com',
  'truyentranh8.org',
  'truyentranh8.net',
  'truyenqq.com',
  'truyenchon.com',
  'nettruyenco.com',
  'vuidoctruyen.com',
  'vuidu.com',
  'otakusan.net'
];
