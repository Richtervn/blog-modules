import express from 'express';

import uploadCover from './services/uploadCover';
import addGame from './services/addGame';
import updateGame from './services/updateGame';
import searchGame from './services/searchGame';

export default (GamingHistory, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_game',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const game = await addGame(GamingHistory, req.body);
      res.send(game);
    })
  );

  router.get(
    '/get_all',
    wrap(async (req, res, next) => {
      const games = await commonService.getAll(GamingHistory);
      res.send(games);
    })
  );

  router.put(
    '/update',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const game = await updateGame(GamingHistory, body);
      res.send(game);
    })
  );

  router.delete(
    '/remove/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(GamingHistory, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/search',
    wrap(async (req, res, next) => {
      const games = await searchGame(GamingHistory, req.query);
      res.send(games);
    })
  );

  return router;
};
