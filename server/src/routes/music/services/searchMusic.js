export default async (Music, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  if (query.Genre) option.Genre = { $regex: query.Genre };
  if (query.Artist) option.Artist = { $regex: query.Artist };
  const songs = await Music.find(option);
  return songs;
};
