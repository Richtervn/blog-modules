import express from 'express';

import editGame from './services/editGame';
import getGame from './services/getGame';
import uploadGame from './services/uploadGame';

import addMenu from '../system/services/addMenu';
import editMenu from '../system/services/editMenu';

export default (FlashGames, factories) => {
  const router = express.Router();
  const { wrap, readFile, writeFile, commonService } = factories;

  router.post(
    '/add_game',
    wrap(async (req, res, next) => {
      const body = await uploadGame(req, res);
      const game = await commonService.create(FlashGames, body);
      const menu = await addMenu('Flash Games', game.Name, readFile, writeFile);
      res.send({ game, menu });
    })
  );

  router.get(
    '/get_game/:name',
    wrap(async ({ params: { name } }, res, next) => {
      const game = await getGame(FlashGames, name);
      res.send(game);
    })
  );

  router.put(
    '/edit_game',
    wrap(async (req, res, next) => {
      const body = await uploadGame(req, res);
      const { game, menu } = await editGame(FlashGames, body, editMenu, readFile, writeFile);
      res.send({ game, menu });
    })
  );

  return router;
};
