import syncItems from './tools/syncItems';
import syncMonsters from './tools/syncMonsters';

export default (models, router, factories, helpers, appConfigs) => {
  const { readFile, writeFile, wrap } = factories;
  const appConfigsPath = './src/features/muonline/darksteam97d99i/appConfigs';

  router.get('/system/game_setting', (req, res, next) => {
    res.send(appConfigs.GameSetting);
  });

  router.get('/system/server_info', (req, res, next) => {
    res.send(appConfigs.ServerInfo);
  });

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
