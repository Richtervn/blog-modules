import express from 'express';

export default (models, methods, factories, helper) => {
  const { wrap } = factories;
  const { VipSystem } = models;
  const { buyVipAccount, buyVipCharacter } = methods;

  const router = express.Router();

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const systems = await VipSystem.findAll();
      res.send(systems);
    })
  );

  router.post(
    '/',
    wrap(async (req, res, next) => {
      const system = await VipSystem.create(req.body);
      res.send(system);
    })
  );

  router.put(
    '/',
    wrap(async (req, res, next) => {
      const id = req.body.id;
      await VipSystem.update({ ...req.body }, { where: { id: id } });
      res.send(req.body);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      await VipSystem.destroy({ where: { id } });
      res.send({ id });
    })
  );

  router.get(
    '/buy',
    wrap(async ({ query }, res, next) => {
      const { packageId, userId, characterId } = query;
      const vipSystem = await VipSystem.findOne({ where: { id: packageId } });
      let result;
      if (vipSystem.type == 'Character') {
        result = await buyVipCharacter(vipSystem, characterId, userId);
      }
      if (vipSystem.type == 'Account') {
        result = await buyVipAccount(vipSystem, userId);
      }
      res.send(result);
    })
  );

  return router;
};
