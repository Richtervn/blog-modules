export default async (Music, body) => {
  const updateForm = { ...body };
  const song = await Music.findOneAndUpdate({ _id: body._id }, { $set: updateForm }, { new: true });
  return song;
};
