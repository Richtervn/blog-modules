import getMangaNews from '../routes/subscribe/services/getMangaNews';

const toTitleCase = srcString => srcString.charAt(0).toUpperCase() + srcString.slice(1, srcString.length);
const urlFragToAka = urlFrag =>
  urlFrag
    .split('-')
    .map(frag => toTitleCase(frag))
    .join(' ');

const getMangaAka = (site, url) => {
  const urlFrags = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('.html', '')
    .replace('www.', '')
    .split('/');
  switch (site) {
    case 'truyentranh.net': {
      return urlFragToAka(urlFrags[1]);
    }
    case 'nettruyen.com': {
      return urlFragToAka(urlFrags[2]);
    }
  }
};

export default async (MangasReading, factories) => {
  const newData = await getMangaNews();
  newData.forEach(async ({ site, data }) => {
    data.forEach(async newManga => {
      if (newManga.chapters) {
        const newestChapter = newManga.chapters[newManga.chapters.length - 1];
        const aka = getMangaAka(site, newestChapter.link);
        const manga = await MangasReading.findOne({ Aka: aka });
        if (manga && parseFloat(manga.Chapter) < parseFloat(newestChapter.name.replace('Chap ', ''))) {
          manga.Status = 'HasNew';
          await manga.save();
        }
      }
    });
  });
};
