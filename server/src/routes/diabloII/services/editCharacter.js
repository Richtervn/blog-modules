export default async (DiabloIICharacters, body) => {
  body.Overview = body.Overview.split(',');
  let updateForm = { ...body };
  await DiabloIICharacters.update({ _id: body._id }, { $set: updateForm });
  return body;
};
