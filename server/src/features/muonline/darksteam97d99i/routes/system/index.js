export default (models, router, factories, helpers, appConfigs) => {
  router.get('/system/game_setting', (req, res, next) => {
    res.send(appConfigs.GameSetting);
  });
  router.get('/system/server_info', (req, res, next) => {
    res.send(appConfigs.ServerInfo);
  });
  return router;
};
