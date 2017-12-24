export default async (DiabloIICharacters, body) => {
  body.Overview = body.Overview.split(',');
  const character = new DiabloIICharacters(body);
  const result = await character.save();
  return result;
};
