export default async (MangasReading, query) => {
  const { option, type } = query;
  const sortOption = {};
  sortOption[option] = type == 'ASC' ? 1 : -1;
  const mangas = await MangasReading.find({}, null, { sort: sortOption });
  return mangas;
};


