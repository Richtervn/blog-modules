export default async (MangasReading, req) => {
  const { body, file } = req;
  body.Aka = body.Aka.split(',');
  body.Authors = body.Authors.split(',');
  body.Genre = body.Genre.split(',');
  let updateForm = { ...body };
  await MangasReading.update({ _id: body._id }, { $set: updateForm });
  return body;
};
