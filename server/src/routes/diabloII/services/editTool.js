export default async (DiabloIITools, body) => {
  body.Overview = body.Overview.split(',');
  let updateForm = { ...body };
  await DiabloIITools.update({ _id: body._id }, { $set: updateForm });
  return body;
};
