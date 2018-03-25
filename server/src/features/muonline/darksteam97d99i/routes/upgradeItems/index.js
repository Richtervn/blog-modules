import express from 'express';

import getInventory from './services/getInventory';
import upgradeItem from './services/upgradeItem';

export default (models, methods, factories, helpers) => {
  const { wrap } = factories;
  const { Character } = models;

  const router = express.Router();

  router.get(
    '/:characterName',
    wrap(async ({ params: { characterName } }, res, next) => {
      const inventory = await getInventory(Character, characterName, helpers);
      res.send(inventory);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const result = await upgradeItem(models, helpers, body, getInventory);
      res.send(result);
    })
  );

  return router;
};
