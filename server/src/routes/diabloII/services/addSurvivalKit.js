export default async (DiabloIISurvivalKits, body) => {
  body.Overview = body.Overview.split(',');
  const kit = new DiabloIISurvivalKits(body);
  const result = await kit.save();
  return result;
};
