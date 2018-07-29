import moment from 'moment';

const stoneTime = 60 * 60 * 24 * 45;

export default async MangasReading => {
  const mangas = await MangasReading.find({ Status: { $ne: 'End' } });
  mangas.forEach(async manga => {
    const outdateTime = moment().unix() - moment(manga.updatedAt).unix();
    if (manga.Status != 'HasNew' && outdateTime > stoneTime) {
      manga.Status = 'Stone';
      await manga.save();
    }
  });
};
