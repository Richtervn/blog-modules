export default async (YugiohPocDecks, body) => {
  body.Pros = body.Pros.split(',');
  body.Cons = body.Cons.split(',');
  const mod = new YugiohPocDecks(body);
  const doc = await mod.save();
  return doc;
}