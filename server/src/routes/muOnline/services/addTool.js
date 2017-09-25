export default async (MuOnlineTools, body) => {
  body.Credits = body.Credits.split(',');
  const tool = new MuOnlineTools(body);
  const doc = await tool.save();
  return doc;
}
