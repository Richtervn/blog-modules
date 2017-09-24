export default (models, router, factories) => {
  const {wrap, commonService} = factories;
  router.get('/users/test', (req, res, next) => {
    res.send('ok');
  });
  return router;
}