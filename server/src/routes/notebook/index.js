import express from 'express';

export default (Notebooks, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const notebooks = await commonService.getAll(Notebooks, { Content: false });
      res.send(notebooks);
    })
  );

  router.get(
    '/content/:label',
    wrap(async ({ params }, res, next) => {
      const notebook = await commonService.getOneByParam({ Label: params.label });
      res.send(notebook);
    })
  );

  router.post(
    '/add',
    wrap(async ({ body }, res, next) => {
      const notebook = await commonService.create(Notebooks, body);
      res.send(notebook);
    })
  );

  router.put(
    '/update',
    wrap(async ({ body }, res, next) => {
      const notebook = await commonService.update(Notebooks, body);
      res.send(notebook);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async ({ params }, res, next) => {
      const result = await commonService.delete(Notebook, params.id);
      res.send(result);
    })
  );

  return router;
};
