import getChapterFromUrl from './getChapterFromUrl';

export default async (MangasReading, body) => {
  const { url } = body;
  const { mangaAka, chapter } = getChapterFromUrl(url);

  let manga = await MangasReading.findOne({ Aka: mangaAka });
  if (!manga) return { message: 'This manga is not added to tracking' };
  manga.Chapter = chapter;
  manga.ReadingUrl = url;
  manga.Status = 'OnGoing';
  const result = await manga.save();
  return result;
};
