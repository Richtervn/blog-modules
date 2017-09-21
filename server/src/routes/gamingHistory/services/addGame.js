export default async (GamingHistory, body) => {
  body.Periods = body.Periods.split(',');
  const game = new GamingHistory(body);
  const doc = await game.save();
  return doc;
};
