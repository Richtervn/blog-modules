export default async (Projects, body) => {
  let updateForm = { ...body };
  await Projects.update({ _id: body._id }, { $set: updateForm });
  return body;
};
