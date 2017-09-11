import express from 'express';

import uploadCover from './services/uploadCover';
import addManga from './services/addManga';
import quickUpdate from './services/quickUpdate';
import updateManga from './services/updateManga';
import searchManga from './services/searchManga';
import sortManga from './services/sortManga';

export default (MangasReading, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_manga',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const manga = await addManga(MangasReading, req.body);
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
    wrap(async (req, res, next) => {
      const manga = await quickUpdate(MangasReading, req.body);
      res.send(manga);
    })
  );

  router.put(
    '/update',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const manga = await updateManga(MangasReading, req);
      res.send(manga);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(MangasReading, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/search',
    wrap(async (req, res, next) => {
      const mangas = await searchManga(MangasReading, req.query);
      res.send(mangas);
    })
  );

  router.get(
    '/sort',
    wrap(async (req, res, next) => {
      const mangas = await sortManga(MangasReading, req.query);
      res.send(mangas);
    })
  );

  return router;
};
