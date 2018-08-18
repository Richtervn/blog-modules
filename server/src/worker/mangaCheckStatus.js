import moment from 'moment';

const stoneTime = 60 * 60 * 24 * 45;

export default async (MangasReading, io) => {
  const mangas = await MangasReading.find({ Status: { $ne: 'End' } });
  mangas.forEach(async manga => {
    const outdateTime = moment().unix() - moment(manga.updatedAt).unix();
    if (manga.Status != 'HasNew' && outdateTime > stoneTime) {
      manga.Status = 'Stone';
      console.log(`[APP-Manga] ${manga.Name} has stoned`);
      io.emit('appManga/notification', {
        icon: `${manga.CoverUri}`,
        body: `${manga.Name} has became stoned!`,
        title: 'Manga checker'
      });
      await manga.save();
    }
  });
};
