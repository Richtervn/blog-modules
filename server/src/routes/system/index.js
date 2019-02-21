import express from 'express';

import getMenu from './services/getMenu';
import saveMenu from './services/saveMenu';

import districts from './data/Province';

export default (models, factories) => {
  const router = express.Router();
  const { readFile, writeFile, wrap, readMuServerFile, commonService } = factories;
  const { FlashGames } = models;

  router.get(
    '/get_menu',
    wrap(async (req, res, next) => {
      const [menu, flashGames] = [await getMenu(readFile), await commonService.getAll(FlashGames)];
      flashGames.forEach(flashGame => {
        menu['Flash Games'].items.push(flashGame.Name);
      });
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

  router.get(
    '/test',
    wrap(async (req, res, next) => {
      res.send(districts.map((district, i) => {
        return {
          name: district.Name,
          order: i
        }
      }));
    })
  );

  return router;
};
// "items": [
//   "Sonny 1",
//   "Sonny 2",
//   "Stormy Castle",
//   "Kingdom Rush",
//   "Kingdom Rush 2"
// ],
