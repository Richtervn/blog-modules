export default async (YugiohPocDecks, body) => {
  body.Pros = body.Pros.split(',');
  body.Cons = body.Cons.split(',');
  await YugiohPocDecks.update({ _id: body._id }, { $set: body });
  return body;
};
