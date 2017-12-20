export default async (DiabloIITools, body) => {
  body.Overview = body.Overview.split(',');
  const tool = new DiabloIITools(body);
  const result = await tool.save();
  return result;
};
