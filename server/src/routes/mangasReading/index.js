import express from 'express';
import Promise from 'bluebird';

import quickUpdate from './services/quickUpdate';
import sortManga from './services/sortManga';

export default (MangasReading, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_manga',
    wrap(async ({ files, body }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Mangas Reading');
      if (coverUri) body.CoverUri = coverUri;
      const manga = await commonService.create(MangasReading, body, ['Aka', 'Authors', 'Genre']);
      res.send(manga);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const mangas = await commonService.getAll(MangasReading);
      res.send(mangas);
    })
  );

  router.put(
    '/quick_update',
    wrap(async ({ body }, res, next) => {
      const manga = await quickUpdate(MangasReading, body);
      res.send(manga);
    })
  );

  router.put(
    '/update',
    wrap(async ({ files, body }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Mangas Reading');
      if (coverUri) body.CoverUri = coverUri;

      const manga = await commonService.update(MangasReading, body, ['Aka', 'Authors', 'Genre'], ['CoverUri']);
      // res.send(manga);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MangasReading, id, ['CoverUri']);
      res.send(result);
    })
  );

  router.get(
    '/search',
    wrap(async ({ query }, res, next) => {
      const mangas = await commonService.search(MangasReading, query);
      res.send(mangas);
    })
  );

  router.get(
    '/sort',
    wrap(async ({ query }, res, next) => {
      const mangas = await sortManga(MangasReading, query);
      res.send(mangas);
    })
  );

  return router;
};
