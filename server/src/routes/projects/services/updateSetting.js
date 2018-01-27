export default async (Projects, body) => {
  const updateForm = { ...body };
  await Projects.update({ _id: body._id }, { $set: updateForm });
  return updateForm;
};
