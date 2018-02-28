export default async (DiabloIITools, query) => {
  const option = {};
  if (query.Name) option.Name = { $regex: query.Name };
  const tools = await DiabloIITools.find(option, { HTML: false, CSS: false, Overview: false });
  return tools;
};
