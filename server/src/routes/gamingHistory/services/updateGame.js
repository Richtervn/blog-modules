export default async (GamingHistory, body) => {
  body.Periods = body.Periods.split(',');
  body.Genres = body.Genres.split(',');
  body.Publishers = body.Publishers.split(',');
  let updateForm = { ...body };
  await GamingHistory.update({ _id: body._id }, { $set: updateForm });
  return body;
};
