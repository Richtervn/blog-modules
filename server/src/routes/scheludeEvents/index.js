import express from 'express';

export default (ScheludeEvents, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const events = await commonService.getAll(ScheludeEvents, {
        _id: true,
        start: true,
        end: true,
        title: true,
        color: true,
        priority: true
      });
      res.send(events);
    })
  );

  router.get(
    '/get_detail/:id',
    wrap(async ({ params }, res, next) => {
      const event = await commonService.getOne(ScheludeEvents, params.id);
      res.send(event);
    })
  );

  router.post(
    '/add',
    wrap(async ({ body }, res, next) => {
      const event = await commonService.create(ScheludeEvents, body);
      res.send(event);
    })
  );

  router.put(
    '/edit',
    wrap(async ({ body }, res, next) => {
      const event = await commonService.update(ScheludeEvents, body);
      res.send(event);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(ScheludeEvents, req.params.id);
      res.send({ id });
    })
  );

  return router;
};
