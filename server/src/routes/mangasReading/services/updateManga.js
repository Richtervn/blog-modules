export default async (MangasReading, req) => {
  const { body, file } = req;
  if (body.Aka) body.Aka = body.Aka.split(',');
  if (body.Authors) body.Authors = body.Authors.split(',');
  if (body.Genre) body.Genre = body.Genre.split(',');
  let updateForm = { ...body };
  const manga = await MangasReading.findOneAndUpdate({ _id: body._id }, { $set: updateForm }, { new: true });
  return manga;
};
