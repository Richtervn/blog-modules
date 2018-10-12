import express from 'express';

import getMenu from './services/getMenu';
import saveMenu from './services/saveMenu';

export default factories => {
  const router = express.Router();
  const { readFile, writeFile, wrap, readMuServerFile } = factories;

  router.get(
    '/get_menu',
    wrap(async (req, res, next) => {
      const menu = await getMenu(readFile);
      res.send(menu);
    })
  );

  router.post(
    '/save_menu',
    wrap(async ({ body }, res, next) => {
      const menu = await saveMenu(body, readFile, writeFile);
      res.send(menu);
    })
  );

  // router.get('/test', wrap(async(req, res, next) => {
  //   
  //   res.send(data);
  // }))

  return router;
};
