export default async (DiabloIIMods, body) => {
  body.Overview = body.Overview.split(',');
  let updateForm = { ...body };
  await DiabloIIMods.update({ _id: body._id }, { $set: updateForm });
  return body;
};
