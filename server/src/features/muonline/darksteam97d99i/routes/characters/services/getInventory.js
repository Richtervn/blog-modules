export default async (Character, characterName, helpers) => {
  const { readInventory, decodeItemValue } = helpers;
  const character = await Character.findOne({ where: { Name: characterName } });
  const inventory = await readInventory(character.Inventory);

  const equipment = {};
  Object.keys(inventory).map(slot => {
    equipment[slot] = decodeItemValue(inventory[slot]);
  });

  return equipment;
};
