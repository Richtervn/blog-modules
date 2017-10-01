export default (character, charge) => {
  if (character.Money < charge) {
    return { message: 'Character do not have enough Zen' };
  }
  return { Money: character.Money - charge };
};
