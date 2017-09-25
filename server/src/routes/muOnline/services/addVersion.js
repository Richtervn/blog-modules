export default async (MuOnlineVersions, body) => {
  body.Credits = body.Credits.split(',');
  const version = new MuOnlineVersions(body);
  const doc = await version.save();
  return doc;
}
