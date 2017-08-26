export default async (FlashGames, body) => {
  const flashGame = new FlashGames(body);
  const game = await flashGame.save();
  return game;
};
