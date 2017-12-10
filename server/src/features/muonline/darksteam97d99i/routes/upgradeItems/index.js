import getInventory from './services/getInventory';
import upgradeItem from './services/upgradeItem';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap } = factories;
  const { Character } = models;

  router.get(
    '/upgrade_items/inventory/:characterName',
    wrap(async (req, res, next) => {
      const inventory = await getInventory(Character, req.params.characterName, helpers);
      res.send(inventory);
    })
  );

  router.put(
    '/upgrade_items',
    wrap(async (req, res, next) => {
      const result = await upgradeItem(models, helpers, req.body, getInventory);
      res.send(result);
    })
  );

  return router;
};
