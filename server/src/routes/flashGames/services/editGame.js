export default async (FlashGames, body, editMenu, readFile, writeFile) => {
  let updateForm = { ...body };
  const flashGame = await FlashGames.findOne({ _id: body._id });
  await FlashGames.update({ _id: body._id }, { $set: updateForm });
  const menu = await editMenu('Flash Games', flashGame.Name, body.Name, readFile, writeFile);

  return { game: updateForm, menu };
};
