import express from 'express';

export default (GamingHistory, GamingHistoryAbout, GamingHistoryGuide, GamingHistoryOverview, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  /*Gaming History Guide Routing*/
  router.post(
    '/add_guide',
    wrap(async ({ body }, res, next) => {
      const guide = await commonService.create(GamingHistoryGuide, body);
      res.send(guide);
    })
  );

  router.put(
    '/edit_guide',
    wrap(async ({ body }, res, next) => {
      const guide = await commonService.update(GamingHistoryGuide, body);
      res.send(guide);
    })
  );

  router.get(
    '/get_guide/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const guide = await commonService.getOne(GamingHistoryGuide, id);
      res.send(guide);
    })
  );

  router.get(
    '/get_guides/:gameId',
    wrap(async ({ params: { gameId } }, res, next) => {
      const guides = await commonService.getByParam(GamingHistoryGuide, 'GameId', gameId, {
        CSS: false,
        HTML: false
      });
      res.send(guides);
    })
  );

  router.delete(
    '/delete_guide/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(GamingHistoryGuide, id);
      res.send(result);
    })
  );

  /*Gaming History Overview Routing*/
  router.post(
    '/add_overview',
    wrap(async ({ body }, res, next) => {
      const overview = await commonService.create(GamingHistoryOverview, body);
      res.send(overview);
    })
  );

  router.put(
    '/edit_overview',
    wrap(async ({ body }, res, next) => {
      const overview = await commonService.update(GamingHistoryOverview, body);
      res.send(overview);
    })
  );

  router.get(
    '/get_overviews/:gameId',
    wrap(async ({ params: { gameId } }, res, next) => {
      const overviews = await commonService.getByParam(GamingHistoryOverview, 'GameId', gameId, {
        Sections: false
      });
      res.send(overviews);
    })
  );

  router.get(
    '/get_overview/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const overview = await commonService.getOne(GamingHistoryOverview, id);
      res.send(overview);
    })
  );

  router.delete(
    '/delete_overview/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.detele(GamingHistoryOverview, id);
      res.send(result);
    })
  );

  /*Gaming History Routing*/
  router.get(
    '/get_list',
    wrap(async (req, res, next) => {
      const games = await commonService.getAll(GamingHistory);
      res.send(games);
    })
  );

  router.post(
    '/add_game',
    wrap(async ({ body, files }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Gaming History');
      if (coverUri) body.CoverUri = coverUri;
      const game = await commonService.create(GamingHistory, body, ['Periods', 'Genres', 'Publishers']);
      const gameAbout = await commonService.create(GamingHistoryAbout, { GameId: game._id });
      res.send(game);
    })
  );

  router.put(
    '/edit_game',
    wrap(async ({ body, files }, res, next) => {
      const coverUri = commonService.uploadImage(files, './public/Gaming History');
      if (coverUri) body.CoverUri = coverUri;
      const game = await commonService.update(GamingHistory, body, ['Periods', 'Genres', 'Publishers'], ['CoverUri']);
      res.send(game);
    })
  );

  router.delete(
    '/delete_game/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(GamingHistory, id, ['CoverUri']);
      res.send(result);
    })
  );

  router.get(
    '/search',
    wrap(async ({ query }, res, next) => {
      const games = await commonService.search(GamingHistory, query);
      res.send(games);
    })
  );

  /*Gaming History About Routing*/
  router.get(
    '/get_about/:gameId',
    wrap(async ({ params: { gameId } }, res, next) => {
      const result = await commonService.getOneByParam(GamingHistoryAbout, { GameId: gameId });
      res.send(result);
    })
  );

  router.put(
    '/edit_about',
    wrap(async ({ body }, res, next) => {
      const result = await commonService.updateByParam(GamingHistoryAbout, { GameId: body.GameId }, body);
      res.send(result);
    })
  );

  return router;
};
