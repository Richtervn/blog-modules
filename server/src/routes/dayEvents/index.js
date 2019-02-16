import express from 'express';

export default (DayEvents, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const events = await commonService.getAll(DayEvents, {
        _id: true,
        start: true,
        end: true,
        title: true,
        type: true,
        color: true,
        priority: true
      });
      res.send(events);
    })
  );

  router.get(
    '/get_detail/:id',
    wrap(async ({ params }, res, next) => {
      const event = await commonService.getOne(DayEvents, params.id);
      res.send(event);
    })
  );

  router.post(
    '/add',
    wrap(async ({ body }, res, next) => {
      const event = await commonService.create(DayEvents, body);
      res.send(event);
    })
  );

  router.put(
    '/edit',
    wrap(async ({ body }, res, next) => {
      const event = await commonService.update(DayEvents, body);
      res.send(event);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async (req, res, next) => {
      const result = await commonService.delete(DayEvents, req.params.id);
      res.send(result);
    })
  );

  return router;
};
