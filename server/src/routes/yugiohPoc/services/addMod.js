export default async (YugiohPocMods, body) => {
  body.Credits = body.Credits.split(',');
  const mod = new YugiohPocMods(body);
  const doc = await mod.save();
  return doc;
}