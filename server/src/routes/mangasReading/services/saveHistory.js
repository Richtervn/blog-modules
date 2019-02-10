import _ from 'underscore';
import Promise from 'bluebird';

import crawl, { sites as crawlableSites } from './crawl';
import getChapterFromUrl, { sites as subscriblableSites } from './getChapterFromUrl';

import getSite from '../helpers/getSite';
import getUrlFrags from '../helpers/getUrlFrags';

let lastSync = 0;

export default async (historyItems, MangasReading, notificationHandler) => {
  let validItems = historyItems.filter(item => item.lastVisitTime > lastSync);

  validItems = validItems
    .map(item => {
      const info = getChapterFromUrl(item.url);
      if (info.message || isNaN(info.chapter)) {
        return null;
      }

      return {
        url: item.url,
        site: getSite(item.url),
        mangaAka: info.mangaAka,
        chapter: info.chapter
      };
    })
    .filter(item => !!item);

  const groupedItems = _.groupBy(validItems, 'mangaAka');
  const mangaMap = {};
  const unsavedMangas = [];

  await Promise.all(
    Object.keys(groupedItems).map(async mangaAka => {
      const maxItem = _.max(groupedItems[mangaAka], groupedItem => parseFloat(groupedItem.chapter));

      let manga = await MangasReading.findOne({ Aka: mangaAka });

      if (!manga) {
        const groupedBySites = _.groupBy(groupedItems[mangaAka], 'site');
        const crawlableSite = Object.keys(groupedBySites).filter(site => _.contains(crawlableSites, site))[0];

        if (crawlableSite) {
          try {
            const data = await crawl(groupedBySites[crawlableSite][0].url);
            unsavedMangas.push({
              ...data,
              Authors: data.Authors ? data.Authors.split(',') : [],
              Genre: data.Genre ? data.Genre.split(',') : [],
              Aka: data.Aka.split(','),
              maxChapter: maxItem.chapter,
              maxChapterUrl: maxItem.url
            });
          } catch (e) {
            console.log(e);
            return e;
          }
        }
        return;
      }

      if (parseFloat(maxItem.chapter) <= parseFloat(manga.Chapter)) {
        return;
      }

      if (!mangaMap[manga._id]) {
        mangaMap[manga._id] = maxItem.chapter;
        return;
      }

      mangaMap[manga._id] = Math.max(parseFloat(mangaMap[manga._id]), parseFloat(maxItem.chapter));
    })
  );

  if (unsavedMangas.length > 0) {
    notificationHandler.send('appManga/unsaved', unsavedMangas);
  }

  if (Object.keys(mangaMap).length < 1) {
    return;
  }

  await Promise.all(
    Object.keys(mangaMap).map(async mangaId => {
      const result = await MangasReading.findOneAndUpdate(
        { _id: mangaId },
        { $set: { Chapter: mangaMap[mangaId] } },
        { new: true }
      );
      notificationHandler.send('appManga/notification', {
        icon: `${result.CoverUri}`,
        body: `Updated ${result.Name} to chapter ${result.Chapter}`,
        title: 'Manga checker',
        type: 'UPDATE_MANGAS_READING_CHAPTER',
        data: JSON.parse(JSON.stringify(result))
      });
    })
  );

  lastSync = Date.now();
  return;
};
