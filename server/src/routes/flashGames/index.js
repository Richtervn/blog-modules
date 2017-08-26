import express from 'express';

import addGame from './services/addGame';
import getGame from './services/getGame';
import uploadGame from './services/uploadGame';
import addMenu from '../system/services/addMenu';

export default (FlashGames, factories) => {
  const router = express.Router();
  const { wrap, readFile, writeFile } = factories;

  router.post(
    '/add_game',
    wrap(async (req, res, next) => {
      const body = await uploadGame(req, res);
      const game = await addGame(FlashGames, body);
      const menu = await addMenu('Flash Games', game.Name, readFile, writeFile);
      res.send({ game, menu });
    })
  );

  router.get(
    '/get_game/:name',
    wrap(async (req, res, next) => {
      const game = await getGame(FlashGames, req.params.name);
      res.send(game);
    })
  );

  router.get('/test', async (req, res, next) => {
    const list = await FlashGames.find();
    res.send(list);
  });

  return router;
};
