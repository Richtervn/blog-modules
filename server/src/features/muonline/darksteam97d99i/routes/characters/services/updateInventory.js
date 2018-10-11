const emptyItemValue = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255];

export default async (Character, body, helpers) => {
  const result = {};
  const { characterName, slot } = body;
  const { makeInventory, readInventory, makeItemValue } = helpers;
  const character = await Character.findOne({ where: { Name: characterName } });
  const inventory = await readInventory(character.Inventory);

  if (body.item) {
    const item = {
      category: body.item.category,
      itemId: body.item.itemId,
      option: body.item.option,
      level: body.item.level,
      luck: body.item.luck == true ? 1 : 0,
      skill: body.item.skill == true ? 1 : 0,
      exc1: body.item.exc1 == true ? 1 : 0,
      exc2: body.item.exc2 == true ? 1 : 0,
      exc3: body.item.exc3 == true ? 1 : 0,
      exc4: body.item.exc4 == true ? 1 : 0,
      exc5: body.item.exc5 == true ? 1 : 0,
      exc6: body.item.exc6 == true ? 1 : 0
    };
    const itemValue = makeItemValue(item);
    inventory[slot] = itemValue;
    result[slot] = item;
  } else {
    inventory[slot] = emptyItemValue;
    result[slot] = null;
  }
  await character.update({ Inventory: makeInventory(inventory) });
  return result;
};
