export default async (GamingHistory, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  if (query.Publisher) option.Publisher = { $regex: query.Publisher };
  const games = await GamingHistory.find(option);
  return games;
};
