export default async (MuOnlineVersions, body) => {
  body.Credits = body.Credits.split(',');
  let updateForm = { ...body };
  await MuOnlineVersions.update({ _id: body._id }, { $set: updateForm });
  return body;
};
