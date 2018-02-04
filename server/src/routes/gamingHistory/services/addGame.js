export default async (GamingHistory, GamingHistoryAbout, body) => {
  body.Periods = body.Periods.split(',');
  body.Genres = body.Genres.split(',');
  body.Publishers = body.Publishers.split(',');
  const game = new GamingHistory(body);
  const doc = await game.save();
  const gameAbout = new GamingHistoryAbout({ GameId: doc._id });
  await gameAbout.save();
  return doc;
};
