export default async (GamingHistory, body) => {
  body.Periods = body.Periods.split(',');
  let updateForm = { ...body };
  await GamingHistory.update({ _id: body._id }, { $set: updateForm });
  return body;
};
