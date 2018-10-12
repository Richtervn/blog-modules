import express from 'express';

import addCharacter from './services/addCharacter';
import editCharacter from './services/editCharacter';
import deleteCharacter from './services/deleteCharacter';

import addPoints from './services/addPoints';
import changeName from './services/changeName';
import getAccountCharacters from './services/getAccountCharacters';
import getCharacters from './services/getCharacters';
import getInventory from './services/getInventory';
import grandReset from './services/grandReset';
import questReset from './services/questReset';
import updateInventory from './services/updateInventory';
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

  router.put(
    '/change_name',
    wrap(async ({ body }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await changeName(models, methods, GameSetting, body);
      res.send(result);
    })
  );

  // TODO: Waiting enough utils function to create page
  /* pending routing */
  router.get('/clear_inventory', wrap(async ({ req, res, next }) => {}));

  /* admin routing */
  router.get(
    '/',
    wrap(async ({ query }, res, next) => {
      const characters = await getCharacters(Character, query);
      res.send(characters);
    })
  );

  router.get(
    '/inventory/:characterName',
    wrap(async ({ params: { characterName } }, res, next) => {
      const inventory = await getInventory(Character, characterName, helpers);
      res.send(inventory);
    })
  );

  router.put(
    '/inventory',
    wrap(async ({ body }, res, next) => {
      const result = await updateInventory(Character, body, helpers);
      res.send(result);
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
      const character = await addCharacter(models, commonSequelize, body);
      res.send(character);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const character = await editCharacter(models, commonSequelize, body);
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
