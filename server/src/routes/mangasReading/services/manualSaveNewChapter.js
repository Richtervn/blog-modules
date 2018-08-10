import getChapterFromUrl from './getChapterFromUrl';

export default async (MangasReading, body) => {
  const { mangaAka, chapter } = getChapterFromUrl(body.url);
  let manga = await MangasReading.findOne({ Aka: mangaAka });
  if (!manga) return { message: 'This manga is not added to tracking' };
  if (parseFloat(chapter) <= parseFloat(manga.Chapter)) {
    return { message: `Already read ${manga.Name} to chapter ${chapter}` };
  }
  if (parseFloat(chapter) <= (parseFloat(manga.NewChapter) || 0)) {
    return { message: `Tracker already knew that` };
  }
  manga.Status = 'HasNew';
  manga.NewChapter = chapter;
  const result = await manga.save();

  return result;
};
