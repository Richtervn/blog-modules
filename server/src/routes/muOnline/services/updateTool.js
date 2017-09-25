export default async (MuOnlineTools, body) => {
  body.Credits = body.Credits.split(',');
  let updateForm = { ...body };
  await MuOnlineTools.update({ _id: body._id }, { $set: updateForm });
  return body;
};
