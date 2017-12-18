import express from 'express';

import uploadMod from './services/uploadMod';
import uploadCharacter from './services/uploadCharacter';
import uploadTool from './services/uploadTool';
import uploadSurvivalKit from './services/uploadSurvivalKit';
import addMod from './services/addMod';
import addCharacter from './services/addCharacter';
import addTool from './services/addTool';
import addSurvivalKit from './services/addSurvivalKit';
import editMod from './services/editMod';
import editTool from './services/editTool';
import editCharacter from './services/editCharacter';
import editSurvivalKit from './services/editSurvivalKit';

export default (DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get(
    '/mods',
    wrap(async (req, res, next) => {
      const mods = await DiabloIIMods.find({}, { Description: false, Introduction: false, BackgroundUrl: false });
      res.send(mods);
    })
  );

  router.get(
    '/mod/:id',
    wrap(async (req, res, next) => {
      const mod = await commonService.getOne(DiabloIIMods, req.params.id);
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
    '/tools',
    wrap(async (req, res, next) => {
      const tools = await commonService.getAll(DiabloIITools);
      res.send(tools);
    })
  );

  router.get(
    '/survival_kits',
    wrap(async (req, res, next) => {
      const kits = await commonService.getAll(DiabloIISurvivalKits);
      res.send(kits);
    })
  );

  router.post(
    '/mod',
    wrap(async (req, res, next) => {
      const body = await uploadMod(req, res);
      const result = await addMod(DiabloIIMods, body);
      res.send(result);
    })
  );

  router.post(
    '/character',
    wrap(async (req, res, next) => {
      const body = await uploadCharacter(req, res);
      const result = await addCharacter(DiabloIICharacters, body);
      res.send(result);
    })
  );

  router.post(
    '/tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      const result = await addTool(DiabloIITools, body);
      res.send(result);
    })
  );

  router.post(
    '/survival_kit',
    wrap(async (req, res, next) => {
      const body = await uploadSurvivalKit(req, res);
      const result = await addSurvivalKit(DiabloIISurvivalKits, body);
      res.send(result);
    })
  );

  router.put(
    '/mod',
    wrap(async (req, res, next) => {
      const body = await uploadMod(req, res);
      const result = await editMod(DiabloIIMods, body);
      res.send(result);
    })
  );

  router.put(
    '/tool',
    wrap(async (req, res, next) => {
      const body = await uploadTool(req, res);
      const result = await editTool(DiabloIITools, body);
      res.send(result);
    })
  );

  router.put(
    '/survival_kit',
    wrap(async (req, res, next) => {
      const body = await uploadSurvivalKit(req, res);
      const result = await editSurvivalKit(DiabloIISurvivalKits, body);
      res.send(result);
    })
  );

  router.put(
    '/character',
    wrap(async (req, res, next) => {
      const body = await uploadCharacter(req, res);
      const result = await editCharacter(DiabloIICharacters, body);
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

  return router;
};
