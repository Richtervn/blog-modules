export default async (Projects, body) => {
  body.Technologies = body.Technologies.split(',');
  let updateForm = { ...body };
  await Projects.update({ _id: body._id }, { $set: updateForm });
  return body;
};
