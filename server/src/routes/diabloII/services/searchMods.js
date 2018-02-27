export default async (DiabloIIMods, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  if (query.Version) option.Version = { $regex: query.Version };
  const mods = await DiabloIIMods.find(option, { HTML: false, CSS: false, Overview: false });
  return mods;
};
