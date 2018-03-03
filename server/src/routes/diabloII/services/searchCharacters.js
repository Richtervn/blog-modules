export default async (DiabloIICharacters, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  if (query.ModId) option.ModId = { $regex: query.ModId };
  if (query.Title) option.Title = { $regex: query.Title };
  if (query.Class) option.Class = { $regex: query.Class };
  const characters = await DiabloIICharacters.find(option);
  return characters;
};
