export default async (FlashGames, name) => {
  const flashGame = await FlashGames.findOne({Name: name});
  return flashGame;
};
