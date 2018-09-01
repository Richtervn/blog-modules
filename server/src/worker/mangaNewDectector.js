import chalk from 'chalk';

import getMangaNews from '../routes/subscribe/services/getMangaNews';
import getChapterFromUrl from '../routes/mangasReading/services/getChapterFromUrl';

const getNewChapterLink = newManga => {
  let newChapterLink;
  for (let i = 0; i < newManga.chapters.length; i++) {
    let newChapter = newManga.chapters[i];
    if (newChapter.name.toLowerCase().indexOf('raw' === -1)) {
      newChapterLink = newChapter.link;
      break;
    }
  }
  return newChapterLink;
};

export default async (MangasReading, factories, notificationHandler) => {
  const newData = await getMangaNews();
  newData.forEach(async ({ site, data }) => {
    data.forEach(async newManga => {
      if (!newManga.chapters || newManga.chapters.length < 1) {
        return;
      }

      const newChapterLink = getNewChapterLink(newManga);
      const { mangaAka, chapter } = getChapterFromUrl(newChapterLink);
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

      console.log(`${chalk.bold.green('[APP-Manga]')} ${manga.Name} has new chapter ${newChapter}`);

      notificationHandler.send('appManga/notification', {
        icon: `${manga.CoverUri}`,
        body: `${manga.Name} has new chapter ${newChapter}`,
        title: 'Manga checker',
        link: `${newChapterLink}`
      });
      await manga.save();
    });
  });
};
