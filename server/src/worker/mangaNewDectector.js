import getMangaNews from '../routes/subscribe/services/getMangaNews';
import getChapterFromUrl from '../routes/mangasReading/services/getChapterFromUrl';

export default async (MangasReading, factories) => {
  const newData = await getMangaNews();
  newData.forEach(async ({ site, data }) => {
    data.forEach(async newManga => {
      if (!newManga.chapters || newManga.chapters.length < 1) {
        return;
      }

      const { mangaAka, chapter } = getChapterFromUrl(newManga.chapters[0].link);
      const manga = await MangasReading.findOne({ Aka: mangaAka });

      if (!manga) {
        return;
      }

      const newChapter = parseFloat(chapter);
      const readingChapter = parseFloat(manga.Chapter);

      if (newChapter <= readingChapter) {
        return;
      }
      if (newChapter <= parseFloat(manga.NewChapter)) {
        return;
      }

      manga.Status = 'HasNew';
      manga.NewChapter = newChapter;
      console.log(`[APP-Manga] ${manga.Name} has new chapter ${newChapter}`);
      await manga.save();
    });
  });
};
