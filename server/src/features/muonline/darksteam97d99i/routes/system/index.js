export default (models, router, factories, helpers, appConfigs) => {
  const {readFile, writeFile} = factories;
  const appConfigsPath = './src/features/muonline/darksteam97d99i/appConfigs';

  router.get('/system/game_setting', (req, res, next) => {
    res.send(appConfigs.GameSetting);
  });
  router.get('/system/server_info', (req, res, next) => {
    res.send(appConfigs.ServerInfo);
  });
  return router;
};
