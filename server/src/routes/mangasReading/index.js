import express from 'express';
import moment from 'moment';

import quickUpdate from './services/quickUpdate';
import updateManga from './services/updateManga';
import sortManga from './services/sortManga';

import multer from 'multer';
import Promise from 'bluebird';

export default (MangasReading, factories) => {
  const router = express.Router();
  const { wrap, commonService, multerUploader } = factories;

  const srcPath = './public/Mangas Reading'

  const uploadCover = multerUploader.createSingleUpload(
    srcPath,
    (req, file, cb) => {
      const name = moment().format('MMDDYYYYhhmmss') + '.jpg';
      req.body.CoverUri = `${srcPath}/${name}`;
      cb(null, name);
    },
    'file'
  );

  router.post(
    '/add_manga',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const manga = await commonService.create(MangasReading, req.body, ['Aka', 'Authors', 'Genre']);
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
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const manga = await updateManga(MangasReading, req);
      res.send(manga);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(MangasReading, id);
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
