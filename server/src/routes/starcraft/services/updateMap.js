export default async (StarcraftMaps, body) => {
  body.Tipntrick = body.Tipntrick.split(',');
  let updateForm = { ...body };
  await StarcraftMaps.update({ _id: body._id }, { $set: updateForm });
  return body;
};
