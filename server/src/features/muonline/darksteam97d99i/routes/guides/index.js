import express from 'express';

export default (models, methods, factories, helpers, MuOnlineGuides) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const guides = await commonService.getAll(MuOnlineGuides, {
        _id: true,
        Name: true,
        Description: true,
        updatedAt: true
      });
      res.send(guides);
    })
  );

  router.get(
    '/:id',
    wrap(async ({ params }, res, next) => {
      const guide = await commonService.getOne(MuOnlineGuides, params.id);
      res.send(guide);
    })
  );

  return router;
};
