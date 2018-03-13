import express from 'express';

export default (models, methods, factories, helpers, io) => {
  const router = express.Router();
  const { wrap, readFile, writeFile } = factories;
  const { getData, syncItems, syncMonsters } = helpers;

  router.get(
    '/game_setting',
    wrap(async (req, res, next) => {
      const gameSetting = await getData('GameSetting');
      res.send(gameSetting);
    })
  );

  router.get(
    '/server_info',
    wrap(async (req, res, next) => {
      const serverInfo = await getData('ServerInfo');
      res.send(serverInfo);
    })
  );

  router.put(
    '/game_setting',
    wrap(async ({ body }, res, next) => {
      await writeFile(
        './src/features/muonline/darksteam97d99i/configs/GameSetting.json',
        JSON.stringify(body, null, 2)
      );
      res.send(body);
    })
  );

  router.put(
    '/server_info',
    wrap(async ({ body }, res, next) => {
      await writeFile('./src/features/muonline/darksteam97d99i/configs/ServerInfo.json', JSON.stringify(body, null, 2));
      res.send(body);
    })
  );

  router.get(
    '/system/sync_items',
    wrap(async (req, res, next) => {
      await syncItems(factories);
      res.sendStatus(200);
    })
  );

  router.get(
    '/system/sync_monsters',
    wrap(async (req, res, next) => {
      await syncMonsters(factories);
      res.sendStatus(200);
    })
  );

  return router;
};
