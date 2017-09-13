export default async (YugiohPocMods, body) => {
  body.Credits = body.Credits.split(',');
  await YugiohPocMods.update({_id: body._id}, {$set: body});
  return body;
}