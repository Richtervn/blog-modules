export default async (DiabloIIMods, body) => {
  body.Overview = body.Overview.split(',');
  const diabloMod = new DiabloIIMods(body);
  const result = await diabloMod.save();
  return result;
};
