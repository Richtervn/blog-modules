export default async (MangasReading, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  if (query.Genre) option.Genre = { $regex: query.Genre };
  if (query.Author) option.Authors = { $regex: query.Author };
  const mangas = await MangasReading.find(option);
  return mangas;
};
