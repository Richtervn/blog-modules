import express from 'express';

import addMenu from '../system/services/addMenu';
import editMenu from '../system/services/editMenu';

export default (FlashGames, factories) => {
  const router = express.Router();
  const { wrap, readFile, writeFile, commonService } = factories;

  router.post(
    '/add_game',
    wrap(async ({ files, body }, res, next) => {
      const uri = commonService.uploadArchive(files, './public/Flash Games', 'File');
      if (uri) body.Uri = uri;
      const game = await commonService.create(FlashGames, body);
      const menu = await addMenu('Flash Games', game.Name, readFile, writeFile);
      res.send({ game, menu });
    })
  );

  router.get(
    '/get_game/:name',
    wrap(async ({ params: { name } }, res, next) => {
      const game = await commonService.getOneByParam(FlashGames, { Name: name });
      res.send(game);
    })
  );

  router.put(
    '/edit_game',
    wrap(async ({ files, body }, res, next) => {
      const game = await commonService.getOne(FlashGames, body._id);
      const uri = commonService.uploadArchive(files, './public/Flash Games', 'File');
      if (uri) body.Uri = uri;
      const menu = await editMenu('Flash Games', game.Name, body.Name, readFile, writeFile);
      const gameUpdated = await commonService.update(FlashGames, body, null, ['Uri']);
      res.send({ game: gameUpdated, menu });
    })
  );

  return router;
};
