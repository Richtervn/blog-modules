export default async (Character, query) => {
  const options = { where: {} };
  if (query.Name) options.where.Name = { $like: `%${query.Name}%` };
  if (query.AccountID) options.where.AccountID = { $like: `%${query.AccountID}` };
  options.attributes = ['AccountID', 'Name', 'Class', 'Resets', 'GrandResets'];
  const characters = await Character.findAll(options);
  return characters;
};
