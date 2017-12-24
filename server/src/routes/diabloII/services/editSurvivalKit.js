export default async (DiabloIISurvivalKits, body) => {
  body.Overview = body.Overview.split(',');
  let updateForm = { ...body };
  await DiabloIISurvivalKits.update({ _id: body._id }, { $set: updateForm });
  return body;
};
