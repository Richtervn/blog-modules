export default async (models, helpers, body, getInventory) => {
  const { MembCredits, Character } = models;
  const { readInventory, decodeItemValue, makeItemValue, makeInventory } = helpers;

  const [membCredits, character] = [
    await MembCredits.findOne({ where: { memb___id: body.memb___id } }),
    await Character.findOne({ where: { Name: body.characterName } })
  ];

  if (membCredits.credits < body.price) {
    return { message: 'Not enough credits' };
  }

  const result = {};
  const inventory = readInventory(character.Inventory);

  const item = decodeItemValue(inventory[body.slot]);
  Object.keys(body.output).map(order => {
    item[order] = body.output[order];
  });

  inventory[body.slot] = makeItemValue(item);
  await character.update({ Inventory: makeInventory(inventory) });

  membCredits.credits -= body.price;
  await membCredits.update({ credits: membCredits.credits });

  result.credits = membCredits.credits;
  result.inventory = await getInventory(Character, body.characterName, helpers);
  
  return result;
};
