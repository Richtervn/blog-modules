import * as MuData from '../../data';

export default (models, router, factories, helpers, appConfigs) => {
  const { wrap } = factories;
  router.get('/tools/data/:file', (req, res, next) => {
    res.send(MuData[req.params.file]);
  });

  return router;
};
