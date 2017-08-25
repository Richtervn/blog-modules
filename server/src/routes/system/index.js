import express from 'express';

import getMenu from './services/getMenu';

export default (AppMenu, factories) => {
  const router = express.Router();
  const { readFile, wrap } = factories;

  router.get(
    '/get_menu',
    wrap(async (req, res, next) => {
      const menu = await getMenu(readFile);
      res.send(menu);
    })
  );

  return router;
};
