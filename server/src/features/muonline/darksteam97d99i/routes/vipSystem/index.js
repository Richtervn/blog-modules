export default (models, router, factories, helpers, appConfigs) => {
  const { wrap } = factories;
  const { VipSystem } = models;

  router.get(
    '/vip_system/get_all',
    wrap(async (req, res, next) => {
      const systems = await VipSystem.findAll();
      res.send(systems);
    })
  );

  router.post(
    '/vip_system/add',
    wrap(async (req, res, next) => {
      const system = await VipSystem.create(req.body);
      res.send(system);
    })
  );

  router.put(
    '/vip_system/update',
    wrap(async (req, res, next) => {
      const id = req.body.id;
      await VipSystem.update({ ...req.body }, { where: { id: id } });
      res.send(req.body);
    })
  );

  router.delete(
    '/vip_system/:id',
    wrap(async (req, res, next) => {
      await VipSystem.destroy({ where: { id: req.params.id } });
      res.send({ id: req.params.id });
    })
  );

  return router;
};
