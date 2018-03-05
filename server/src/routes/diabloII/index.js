import Promise from 'bluebird';
import express from 'express';

import uploadMod from './services/uploadMod';
import uploadCharacter from './services/uploadCharacter';
import uploadTool from './services/uploadTool';
import uploadSurvivalKit from './services/uploadSurvivalKit';

import getExtra from './services/getExtra';
import extraLevel from './services/extraLevel';
import extraGold from './services/extraGold';
import extraSkill from './services/extraSkill';
import editExtra from './services/editExtra';

export default (DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories) => {
  const router = express.Router();
  const { wrap, commonService, readFile, writeFile } = factories;

  router.get(
    '/mods',
    wrap(async (req, res, next) => {
      const mods = await commonService.find(DiabloIIMods, { HTML: false, CSS: false, Overview: false });
      res.send(mods);
    })
  );

  router.get(
    '/search_mods',
    wrap(async ({ query }, res, next) => {
      const mods = await commonService.search(DiabloIIMods, query, { HTML: false, CSS: false, Overview: false });
      res.send(mods);
    })
  );

  router.get(
    '/mod/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const mod = await commonService.getOne(DiabloIIMods, id);
      res.send(mod);
    })
  );

  router.get(
    '/characters',
    wrap(async (req, res, next) => {
      const characters = await commonService.getAll(DiabloIICharacters);
      res.send(characters);
    })
  );

  router.get(
    '/search_characters',
    wrap(async ({ query }, res, next) => {
      const characters = await commonService.search(DiabloIICharacters, query);
      res.send(characters);
    })
  );

  router.get(
    '/tools',
    wrap(async (req, res, next) => {
      const tools = await commonService.getAll(DiabloIITools, {
        Description: false,
        Introduction: false,
        Overview: false
      });
      res.send(tools);
    })
  );

  router.get(
    '/search_tools',
    wrap(async (req, res, next) => {
      const tools = await commonService.search(DiabloIITools, query, { HTML: false, CSS: false, Overview: false });
      res.send(tools);
    })
  );

  router.get(
    '/tool/:id',
    wrap(async (req, res, next) => {
      const tool = await commonService.getOne(DiabloIITools, req.params.id);
      res.send(tool);
    })
  );

  router.get(
    '/survival_kits',
    wrap(async (req, res, next) => {
      const kits = await commonService.getAll(DiabloIISurvivalKits);
      res.send(kits);
    })
  );

  router.get(
    '/search_survival_kits',
    wrap(async ({ query }, res, next) => {
      const kits = await commonService.search(DiabloIISurvivalKits, query);
      res.send(kits);
    })
  );

  router.post(
    '/mod',
    wrap(async (req, res, next) => {
      const body = await uploadMod(req, res);
      const result = await commonService.create(DiabloIIMods, body, ['Overview']);
      res.send(result);
    })
  );

  router.post(
    '/character',
    wrap(async (req, res, next) => {
      const body = await uploadCharacter(req, res);
      const result = await commonService.create(DiabloIICharacters, body, ['Overview']);
      res.send(result);
    })
  );

  router.post(
    '/tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      const result = await commonService.create(DiabloIITools, body, ['Overview']);
      res.send(result);
    })
  );

  router.post(
    '/survival_kit',
    wrap(async (req, res, next) => {
      const body = await uploadSurvivalKit(req, res);
      const result = await commonService.create(DiabloIISurvivalKits, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/mod',
    wrap(async (req, res, next) => {
      const body = await uploadMod(req, res);
      const result = await commonService.update(DiabloIIMods, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      const result = await commonService.update(DiabloIITools, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/survival_kit',
    wrap(async (req, res, next) => {
      const body = await uploadSurvivalKit(req, res);
      const result = await commonService.update(DiabloIISurvivalKits, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/character',
    wrap(async (req, res, next) => {
      const body = await uploadCharacter(req, res);
      const result = await commonService.update(DiabloIICharacters, body, ['Overview']);
      res.send(result);
    })
  );

  router.delete(
    '/mod/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(DiabloIIMods, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/tool/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(DiabloIITools, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/character/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(DiabloIICharacters, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/survival_kit/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(DiabloIISurvivalKits, req.params.id);
      res.send(id);
    })
  );

  router.get(
    '/extra',
    wrap(async (req, res, next) => {
      const extraData = await getExtra(DiabloIICharacters, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.put(
    '/extra',
    wrap(async (req, res, next) => {
      const extraData = await editExtra(req.body, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.get(
    '/extra/level/:level',
    wrap(async (req, res, next) => {
      const extraData = await extraLevel(req.params.level, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.get(
    '/extra/gold',
    wrap(async (req, res, next) => {
      const result = await extraGold(req.query.amount, req.query.type, readFile, writeFile);
      res.send(result);
    })
  );

  router.get(
    '/extra/skill',
    wrap(async (req, res, next) => {
      const result = await extraSkill(req.query.amount, req.query.type, readFile, writeFile);
      res.send(result);
    })
  );

  return router;
};
