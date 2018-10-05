import chalk from 'chalk';
import moment from 'moment';

const stoneTime = 60 * 60 * 24 * 45;

export default async (MangasReading, notificationHandler) => {
  const mangas = await MangasReading.find({ Status: 'OnGoing' });

  mangas.forEach(async manga => {
    const outdateTime = moment().unix() - moment(manga.updatedAt).unix();

    if (outdateTime > stoneTime) {
      manga.Status = 'Stone';

      console.log(`${chalk.bold.green('[APP-Manga]')} ${manga.Name} has stoned`);

      notificationHandler.send('appManga/notification', {
        icon: `${manga.CoverUri}`,
        body: `${manga.Name} has became stoned!`,
        title: 'Manga checker'
      });

      await manga.save();
    }
  });
};
