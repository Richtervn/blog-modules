import express from 'express';

import uploadCover from './services/uploadCover';
import addGame from './services/addGame';
import updateGame from './services/updateGame';
import searchGame from './services/searchGame';
import updateAbout from './services/updateAbout';

export default (GamingHistory, GamingHistoryAbout, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/get_list',
    wrap(async (req, res, next) => {
      const games = await commonService.getAll(GamingHistory);
      res.send(games);
    })
  );

  router.post(
    '/add_game',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const game = await addGame(GamingHistory, GamingHistoryAbout, req.body);
      res.send(game);
    })
  );

  router.put(
    '/edit_game',
    wrap(async (req, res, next) => {
      const body = await uploadCover(req, res);
      const game = await updateGame(GamingHistory, body);
      res.send(game);
    })
  );

  router.delete(
    '/delete_game/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(GamingHistory, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/get_about/:gameId',
    wrap(async (req, res, next) => {
      const result = await GamingHistoryAbout.findOne({ GameId: req.params.gameId });
      res.send(result);
    })
  );

  router.put(
    '/edit_about',
    wrap(async (req, res, next) => {
      const result = await updateAbout(GamingHistoryAbout, req.body);
      res.send(result);
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
