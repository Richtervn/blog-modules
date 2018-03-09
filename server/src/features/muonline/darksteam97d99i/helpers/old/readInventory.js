export default inv => {
  const inventoryData = inv.toJSON();
  const Inventory = {};

  Inventory.RightHand = inventoryData.data.slice(0, 10);
  Inventory.LeftHand = inventoryData.data.slice(10, 20);
  Inventory.Helm = inventoryData.data.slice(20, 30);
  Inventory.Armor = inventoryData.data.slice(30, 40);
  Inventory.Pants = inventoryData.data.slice(40, 50);
  Inventory.Gloves = inventoryData.data.slice(50, 60);
  Inventory.Boots = inventoryData.data.slice(60, 70);
  Inventory.Wing = inventoryData.data.slice(70, 80);
  Inventory.Pet = inventoryData.data.slice(80, 90);
  Inventory.Pendant = inventoryData.data.slice(90, 100);
  Inventory.RightRing = inventoryData.data.slice(100, 110);
  Inventory.LeftRing = inventoryData.data.slice(110, 120);

  for (let i = 120, index = 0; i < 760; i += 10, index++) {
    const x = Math.floor(index / 8) + 1;
    const y = index % 8 + 1;
    const keyname = 'Inventory' + x.toString() + y.toString();
    Inventory[keyname] = inventoryData.data.slice(i, i + 10);
  }

  return Inventory;
};
