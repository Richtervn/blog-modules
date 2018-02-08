import express from 'express';

import addGame from './services/addGame';
import searchGame from './services/searchGame';
import updateAbout from './services/updateAbout';
import updateGame from './services/updateGame';
import uploadCover from './services/uploadCover';

export default (GamingHistory, GamingHistoryAbout, GamingHistoryGuide, GamingHistoryOverview, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_guide',
    wrap(async (req, res, next) => {
      const guide = commonService.create(GamingHistoryGuide, req.body);
      res.send(guide);
    })
  );

  router.post(
    '/add_overview',
    wrap(async (req, res, next) => {
      const overview = commonService.create(GamingHistoryOverview, req.body);
      res.send(overview);
    })
  );

  router.put(
    '/edit_guide',
    wrap(async (req, res, next) => {
      const guide = commonService.update(GamingHistoryGuide, req.body);
      res.send(guide);
    })
  );

  router.put(
    '/edit_overview',
    wrap(async (req, res, next) => {
      const overview = commonService.update(GamingHistoryOverview, req.body);
      res.send(overview);
    })
  );

  router.get(
    '/get_guides',
    wrap(async (req, res, next) => {
      const guides = commonService.getAll(GamingHistoryGuide, { CSS: false, HTML: false });
      res.send(guides);
    })
  );

  router.get(
    '/get_guide/:id',
    wrap(async (req, res, next) => {
      const guide = commonService.getOne(GamingHistoryGuide, req.params.id);
      res.send(guide);
    })
  );

  router.get(
    '/get_overviews',
    wrap(async (req, res, next) => {
      const overviews = commonService.getAll(GamingHistoryOverview, { Sections: false });
      res.send(overviews);
    })
  );

  router.get(
    '/get_overview/:id',
    wrap(async (req, res, next) => {
      const overview = commonService.getOne(GamingHistoryOverview, req.params.id);
      res.send(overview);
    })
  );

  router.delete(
    '/delete_guide/:id',
    wrap(async (req, res, next) => {
      const id = commonService.delete(GamingHistoryGuide, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/delete_overview/:id',
    wrap(async (req, res, next) => {
      const id = commonService.detele(GamingHistoryOverview, req.params.id);
      res.send(id);
    })
  );

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
