import express from 'express';

import addCharacter from './services/addCharacter';
import editCharacter from './services/editCharacter';
import deleteCharacter from './services/deleteCharacter';

import addPoints from './services/addPoints';
import getAccountCharacters from './services/getAccountCharacters';
import getCharacters from './services/getCharacters';
import grandReset from './services/grandReset';
import questReset from './services/questReset';
import reset from './services/reset';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { wrap, commonSequelize } = factories;
  const { getData } = helpers;
  const { Character } = models;

  router.get(
    '/account/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const characters = await getAccountCharacters(Character, id);
      res.send(characters);
    })
  );

  router.get(
    '/add_points',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await addPoints(models, methods, GameSetting, query);
      res.send(result);
    })
  );

  router.get(
    '/reset',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await reset(models, methods, GameSetting, query);
      res.send(result);
    })
  );

  router.get(
    '/grand_reset',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await grandReset(models, methods, GameSetting, query);
      res.send(result);
    })
  );

  router.get(
    '/quest_reset',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await questReset(models, methods, GameSetting, query);
      res.send(result);
    })
  );

  /* admin routing */
  router.get(
    '/',
    wrap(async ({ query }, res, next) => {
      const characters = await getCharacters(Character, query);
      res.send(characters);
    })
  );

  router.get(
    '/detail/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const character = await Character.findOne({
        where: { Name: id },
        attributes: [
          'AccountID',
          'Name',
          'cLevel',
          'LevelUpPoint',
          'Class',
          'Strength',
          'Dexterity',
          'Vitality',
          'Energy',
          'Money',
          'MapNumber',
          'MapPosX',
          'MapPosY',
          'CtlCode',
          'Resets',
          'GrandResets',
          'IsMarried',
          'MarryName',
          'QuestNumber',
          'QuestMonsters',
          'SkyEventWins',
          'IsVip',
          'VipExpirationTime',
          'Inventory'
        ]
      });
      res.send(character);
    })
  );

  router.post(
    '/',
    wrap(async ({ body }, res, next) => {
      const character = await addCharacter(models, helpers, body);
      res.send(character);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const character = await editCharacter(models, helpers, body);
      res.send(character);
    })
  );

  router.delete(
    '/:name',
    wrap(async ({ params: { name } }, res, next) => {
      const result = await deleteCharacter(models, name);
      res.send(result);
    })
  );

  return router;
};
