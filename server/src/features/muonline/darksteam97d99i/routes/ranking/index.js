import express from 'express';

import getTopPoints from './services/getTopPoints';
import getTopResets from './services/getTopResets';
import getTopZen from './services/getTopZen';
import getTopCredits from './services/getTopCredits';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { wrap } = factories;
  const { Character } = models;
  const { getData } = helpers;

  router.get(
    '/top_points',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const { BASE_STATS } = GameSetting;
      const characters = await getTopPoints(Character, query, BASE_STATS);
      res.send(characters);
    })
  );

  router.get(
    '/top_resets',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const { GRAND_RESET_REQUIRED } = GameSetting;
      const characters = await getTopResets(Character, query, GRAND_RESET_REQUIRED);
      res.send(characters);
    })
  );

  router.get(
    '/top_zen',
    wrap(async (req, res, next) => {
      const accounts = await getTopZen(models);
      res.send(accounts);
    })
  );

  router.get(
    '/top_credits',
    wrap(async (req, res, next) => {
      const accounts = await getTopCredits(models);
      res.send(accounts);
    })
  );

  return router;
};
