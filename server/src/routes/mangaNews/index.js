import express from 'express';
import getMangaNews from './services/getMangaNews';

export default factories => {
  const router = express.Router();
  const { wrap } = factories;

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const result = await getMangaNews();
      res.send(result);
    })
  );

  return router;
};
