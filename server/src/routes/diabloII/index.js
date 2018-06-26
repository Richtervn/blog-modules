import express from 'express';

import getExtra from './services/getExtra';
import extraLevel from './services/extraLevel';
import extraGold from './services/extraGold';
import extraSkill from './services/extraSkill';
import editExtra from './services/editExtra';

export default (DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories) => {
  const router = express.Router();
  const { wrap, commonService, readFile, writeFile } = factories;

  /*Diablo II Mod Routing*/
  router.get(
    '/mods',
    wrap(async (req, res, next) => {
      const mods = await commonService.getAll(DiabloIIMods, { HTML: false, CSS: false, Overview: false });
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

  router.post(
    '/mod',
    wrap(async ({ files, body }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, `./public/DiabloII/Mods/${body.Version}`, 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/DiabloII/Mods/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUrl = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const result = await commonService.create(DiabloIIMods, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/mod',
    wrap(async ({ files, body }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, `./public/DiabloII/Mods/${body.Version}`, 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/DiabloII/Mods/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUrl = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const result = await commonService.update(DiabloIIMods, body, ['Overview'], ['ArchiveUrl', 'IconUrl']);
      res.send(result);
    })
  );

  router.delete(
    '/mod/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(DiabloIIMods, id, ['ArchiveUrl', 'IconUrl']);
      res.send(result);
    })
  );

  /*Diablo II Character Routing*/
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

  router.post(
    '/character',
    wrap(async ({ body, files }, res, next) => {
      const fileUrl = commonService.uploadArchive(files, './public/DiabloII/Characters');
      if (fileUrl) body.FileUrl = fileUrl;
      const result = await commonService.create(DiabloIICharacters, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/character',
    wrap(async ({ body, files }, res, next) => {
      const fileUrl = commonService.uploadArchive(files, './public/DiabloII/Characters');
      if (fileUrl) body.FileUrl = fileUrl;
      const result = await commonService.update(DiabloIICharacters, body, ['Overview'], ['FileUrl']);
      res.send(result);
    })
  );

  router.delete(
    '/character/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(DiabloIICharacters, id, ['FileUrl']);
      res.send(result);
    })
  );

  /*Diablo II Tool Routing*/
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
    wrap(async ({ query }, res, next) => {
      const tools = await commonService.search(DiabloIITools, query, { HTML: false, CSS: false, Overview: false });
      res.send(tools);
    })
  );

  router.get(
    '/tool/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const tool = await commonService.getOne(DiabloIITools, id);
      res.send(tool);
    })
  );

  router.post(
    '/tool',
    wrap(async ({ body, files }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, './public/DiabloII/Tools', 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/DiabloII/Tools/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUrl = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const result = await commonService.create(DiabloIITools, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/tool',
    wrap(async ({ body, files }, res, next) => {
      const archiveUrl = commonService.uploadArchive(files, './public/DiabloII/Tools', 'Archive');
      const iconUrl = commonService.uploadImage(files, './public/DiabloII/Tools/Icons', 'Icon');
      if (archiveUrl) body.ArchiveUrl = archiveUrl;
      if (iconUrl) body.IconUrl = iconUrl;
      const result = await commonService.update(DiabloIITools, body, ['Overview'], ['ArchiveUrl', 'IconUrl']);
      res.send(result);
    })
  );

  router.delete(
    '/tool/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(DiabloIITools, id, ['ArchiveUrl', 'IconUrl']);
      res.send(result);
    })
  );

  /*Diablo II Survival Kits Routing*/
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
    '/survival_kit',
    wrap(async ({ body, files }, res, next) => {
      const fileUrl = commonService.uploadArchive(files, './public/DiabloII/Survival Kits');
      if (fileUrl) body.FileUrl = fileUrl;
      const result = await commonService.create(DiabloIISurvivalKits, body, ['Overview']);
      res.send(result);
    })
  );

  router.put(
    '/survival_kit',
    wrap(async ({ body, files }, res, next) => {
      const fileUrl = commonService.uploadArchive(files, './public/DiabloII/Survival Kits');
      if (fileUrl) body.FileUrl = fileUrl;
      const result = await commonService.update(DiabloIISurvivalKits, body, ['Overview'], ['FileUrl']);
      res.send(result);
    })
  );

  router.delete(
    '/survival_kit/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(DiabloIISurvivalKits, id, ['FileUrl']);
      res.send(result);
    })
  );

  /*Diablo II Extra Routing*/
  router.get(
    '/extra',
    wrap(async (req, res, next) => {
      const extraData = await getExtra(DiabloIICharacters, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.put(
    '/extra',
    wrap(async ({ body }, res, next) => {
      const extraData = await editExtra(body, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.get(
    '/extra/level/:level',
    wrap(async ({ params: { level } }, res, next) => {
      const extraData = await extraLevel(level, readFile, writeFile);
      res.send(extraData);
    })
  );

  router.get(
    '/extra/gold',
    wrap(async ({ query: { amount, type } }, res, next) => {
      const result = await extraGold(amount, type, readFile, writeFile);
      res.send(result);
    })
  );

  router.get(
    '/extra/skill',
    wrap(async ({ query: { amount, type } }, res, next) => {
      const result = await extraSkill(amount, type, readFile, writeFile);
      res.send(result);
    })
  );

  return router;
};
