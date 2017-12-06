import getInventory from './services/getInventory';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { readFile, writeFile, wrap } = factories;
  const { Exchange, Receipt, UserReceipt, Consumable, Material, Character, MembCredits } = models;
  const { readInventory, makeItemValue, makeInventory } = helpers;

  router.get(
    '/upgrade_items/inventory/:characterName',
    wrap(async (req, res, next) => {
      const inventory = await getInventory(Character, req.params.characterName, helpers);
      res.send(inventory);
    })
  );

  return router;
};
