export default async (Material, Character, memb___id, receiptId, readInventory, makeItemValue) => {
  const [materials, characters] = [
    await Material.findAll({ where: { receipt_id: receiptId } }),
    await Character.findAll({ where: { AccountId: memb___id } })
  ];

  let result = {};

  characters.forEach(character => {
    result[character.Name] = {};
    const inventory = readInventory(character.Inventory);

    materials.forEach(material => {
      let count = 0;
      const itemValue = makeItemValue(material.dataValues);

      Object.keys(inventory).forEach(slot => {
        const inventoryValue = inventory[slot];
        if (
          inventoryValue[0] == itemValue[0] &&
          inventoryValue[1] == itemValue[1] &&
          inventoryValue[7] == itemValue[7]
        ) {
          count++;
        }
      });

      result[character.Name][material.name] = count;
    });
  });

  return result;
};
