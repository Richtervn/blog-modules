export default async (GamingHistoryAbout, body) => {
  const aboutContent = await GamingHistoryAbout.findOne({ GameId: body.GameId });
  if (body.Info) aboutContent.Info = body.Info;
  if (body.Sections) aboutContent.Sections = body.Sections;
  const result = await aboutContent.save();
  return result;
};
