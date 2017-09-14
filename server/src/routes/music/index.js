import express from 'express';

import uploadMusic from './services/uploadMusic';
import searchMusic from './services/searchMusic';

export default (Music, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_song',
    wrap(async (req, res, next) => {
      const body = await uploadMusic(req, res);
      const song = await commonService.create(Music, body);
      res.send(song);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const songs = await commonService.getAll(Music);
      res.send(songs);
    })
  );

  router.get(
    '/search',
    wrap(async (req, res, next) => {
      const songs = await searchMusic(Music, req.query);
      res.send(songs);
    })
  );

  return router;
};
