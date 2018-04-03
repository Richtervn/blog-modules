import express from 'express';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { MembCredits, UserCreditsLog } = models;
  const { wrap, commonSequelize } = factories;

  router.get(
    '/logs',
    wrap(async ({ query }, res, next) => {
      const logs = await commonSequelize.getAll(UserCreditsLog, query);
      res.send(logs);
    })
  );

  router.get(
    '/',
    wrap(async ({ query }, res, next) => {
      const credits = await commonSequelize.getAll(MembCredits, query);
      res.send(credits);
    })
  );

  router.post(
    '/',
    wrap(async ({ body }, res, next) => {
      const result = await commonSequelize.create(MembCredits, body);
      res.send(result);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const result = await commonSequelize.update(MembCredits, body);
      res.send(result);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonSequelize.delete(MembCredits, id);
      res.send(result);
    })
  );

  return router;
};