export default async (models, characterName, receiptId, readInventory, makeItemValue, makeInventory) => {
  const { Character, Receipt, MembCredits, Material, UserCreditsLog } = models;
  const emptyItemValue = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255];

  const [character, receipt, materials] = [
    await Character.findOne({ where: { Name: characterName } }),
    await Receipt.findOne({ where: { id: receiptId } }),
    await Material.findAll({ where: { receipt_id: receiptId } })
  ];
  const membCredits = await MembCredits.findOne({ where: { memb___id: character.AccountID } });

  const remainCredit = parseInt(membCredits.credits) - parseInt(receipt.charge_price);
  if (remainCredit < 0) {
    return { message: 'Not enough credits' };
  }

  const inventory = readInventory(character.Inventory);
  const slots = Object.keys(inventory);

  for (let m = 0; m < materials.length; m++) {
    const material = materials[m];
    material.count = parseInt(material.count);

    let count = 0;
    const itemValue = makeItemValue(material.dataValues);

    for (let i = 0; i < slots.length; i++) {
      const inventoryValue = inventory[slots[i]];
      if (inventoryValue[0] == itemValue[0] && inventoryValue[1] == itemValue[1] && inventoryValue[7] == itemValue[7]) {
        count++;
      }
    }

    if (count < material.count) {
      return { message: 'Not enough materials' };
    }
  }

  materials.forEach(material => {
    let count = 0;
    const itemValue = makeItemValue(material.dataValues);
    material.count = parseInt(material.count);

    for (let i = 0; i < slots.length; i++) {
      const inventoryValue = inventory[slots[i]];
      if (inventoryValue[0] == itemValue[0] && inventoryValue[1] == itemValue[1] && inventoryValue[7] == itemValue[7]) {
        inventory[slots[i]] = emptyItemValue;
        count++;
      }
      if (count == material.count) {
        break;
      }
    }
  });

  const craftItemValue = makeItemValue(receipt);
  inventory[receipt.slot] = craftItemValue;

  UserCreditsLog.create({
    memb___id: character.AccountID,
    description: `Craft ${receipt.name}`,
    type: 'minus',
    credits: receipt.charge_price
  });

  await character.update({ Inventory: makeInventory(inventory) });
  await membCredits.update({ credits: remainCredit });
  return { credits: remainCredit, receiptId };
};
