export default async (Character, characterName, helpers) => {
  const { readInventory, decodeItemValue } = helpers;
  const character = await Character.findOne({ where: { Name: characterName } });
  const inventory = await readInventory(character.Inventory);
  const slots = [
    'RightHand',
    'LeftHand',
    'Helm',
    'Armor',
    'Pants',
    'Gloves',
    'Boots',
    'Wing',
    'Pet',
    'Pendant',
    'RightRing',
    'LeftRing'
  ];
  const equipment = {};
  slots.forEach(slot => {
    equipment[slot] = decodeItemValue(inventory[slot]);
  });

  return equipment;
};
