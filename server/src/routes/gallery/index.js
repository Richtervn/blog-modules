import express from 'express';

import getGallery from './services/getGallery';

export default factories => {
  const router = express.Router();
  const { wrap } = factories;

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const result = await getGallery(factories);
      res.send(result);
    })
  );

  return router;
};
