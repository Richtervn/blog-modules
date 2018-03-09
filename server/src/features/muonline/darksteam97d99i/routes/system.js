import express from 'express';

import GameSetting from '../configs/GameSetting';
import ServerInfo from '../configs/ServerInfo';

export default (models, factories, socket) => {
  const router = express.Router();
  const { wrap } = factories;

  router.get('/game_setting', (req, res, next) => {
    res.send(GameSetting);
  });

  router.get('/server_info', (req, res, next) => {
    res.send(ServerInfo);
  });

  return router;
};
