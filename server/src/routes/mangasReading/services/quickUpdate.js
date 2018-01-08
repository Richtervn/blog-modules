export default async (MangasReading, body) => {
  const { url } = body;
  const urlFrags = url.replace('http://', '').split('/');
  const site = urlFrags[0].replace('www.', '');

  let mangaName;
  let mangaAka, chapter, mangaNameFrags;

  switch (site) {
    case 'truyentranh.net': {
      mangaNameFrags = urlFrags[1].split('-');
      mangaAka = mangaNameFrags.join(' ');
      chapter = urlFrags[2].split('-')[1];
      mangaName = urlFrags[1].split('-').join(' ');
      break;
    }

    case 'truyentranh8.net': {
      mangaNameFrags = urlFrags[1].split('-chap-');
      chapter = mangaNameFrags[1];
      mangaName = mangaNameFrags[0]
        .split('-')
        .map(frag => frag.charAt(0).toUpperCase() + frag.slice(1, frag.length))
        .join(' ');
      break;
    }

    case 'nettruyen.com': {
      mangaName = urlFrags[2];
      chapter = urlFrags[3].replace('chap-', '');
      break;
    }
  }

  let manga = await MangasReading.findOne({ Aka: mangaName });
  if (!manga) return { message: 'Not found' };
  await MangasReading.update({ _id: manga._id }, { $set: { Chapter: chapter, ReadingUrl: url } });
  manga.Chapter = chapter;
  manga.ReadingUrl = url;
  return manga;
};
