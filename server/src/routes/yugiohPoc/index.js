import express from 'express';

import addMod from './services/addMod';
import addDeck from './services/addDeck';
import editMod from './services/editMod';
import editDeck from './services/editDeck';
import uploadModImgs from './services/uploadModImgs';
import uploadDeckImg from './services/uploadDeckImg';

export default (YugiohPocMods, YugiohPocDecks, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/add_mod',
    wrap(async (req, res, next) => {
      const body = await uploadModImgs(req, res);
      const mod = await addMod(YugiohPocMods, body);
      res.send(mod);
    })
  );

  router.post(
    '/add_deck',
    wrap(async (req, res, next) => {
      const body = await uploadDeckImg(req, res);
      const deck = await addDeck(YugiohPocDecks, body);
      res.send(deck);
    })
  );

  router.put(
    '/edit_mod',
    wrap(async (req, res, next) => {
      const body = await uploadModImgs(req, res);
      const mod = await editMod(YugiohPocMods, body);
      res.send(mod);
    })
  );

  router.put(
    '/edit_deck',
    wrap(async (req, res, next) => {
      const body = await uploadDeckImg(req, res);
      const deck = await editDeck(YugiohPocDecks, body);
      res.send(deck);
    })
  );

  router.get(
    '/mod_list',
    wrap(async (req, res, next) => {
      const mods = await commonService.getAll(YugiohPocMods);
      res.send(mods);
    })
  );

  router.get(
    '/deck_list/:modId',
    wrap(async (req, res, next) => {
      const decks = await commonService.getByParam(YugiohPocDecks, 'ModId', req.params.modId);
      res.send(decks);
    })
  );

  router.delete(
    '/remove_mod/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(YugiohPocMods, req.params.id);
      res.send(id);
    })
  );

  router.delete(
    '/remove_deck/:id',
    wrap(async (req, res, next) => {
      const id = await commonService.delete(YugiohPocDecks, req.params.id);
      res.send(id);
    })
  );

  return router;
};
