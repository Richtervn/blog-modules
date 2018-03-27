import express from 'express';

export default (YugiohPocMods, YugiohPocDecks, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  /*Yugioh Poc Mod Routing*/
  router.get(
    '/mods',
    wrap(async (req, res, next) => {
      const mods = await commonService.getAll(YugiohPocMods);
      res.send(mods);
    })
  );

  router.post(
    '/mod',
    wrap(async ({ body, files }, res, next) => {
      const icon = commonService.uploadImage(files, './public/Yugioh Poc/mods', 'Icon', 'Icon');
      const image = commonService.uploadImage(files, './public/Yugioh Poc/mods', 'Image', 'Image');
      if (icon) body.Icon = icon;
      if (image) body.Image = image;
      const mod = await commonService.create(YugiohPocMods, body, ['Credits']);
      res.send(mod);
    })
  );

  router.put(
    '/mod',
    wrap(async ({ body, files }, res, next) => {
      const icon = commonService.uploadImage(files, './public/Yugioh Poc/mods', 'Icon', 'Icon');
      const image = commonService.uploadImage(files, './public/Yugioh Poc/mods', 'Image', 'Image');
      if (icon) body.Icon = icon;
      if (image) body.Image = image;
      const mod = await commonService.update(YugiohPocMods, body, ['Credits'], ['Image', 'Icon']);
      res.send(mod);
    })
  );

  router.delete(
    '/mod/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(YugiohPocMods, id, ['Image', 'Icon']);
      res.send(result);
    })
  );

  router.get(
    '/search_mod',
    wrap(async ({ query }, res, next) => {
      const mods = await commonService.search(YugiohPocMods, query);
      res.send(mods);
    })
  );

  /*Yugioh Poc Deck Routing*/
  router.post(
    '/deck',
    wrap(async ({ files, body }, res, next) => {
      const image = commonService.uploadImage(files, './public/Yugioh Poc/decks', 'Image');
      if (image) body.Image = image;
      const deck = await commonService.create(YugiohPocDecks, body, ['Pros', 'Cons']);
      res.send(deck);
    })
  );

  router.put(
    '/deck',
    wrap(async ({ files, body }, res, next) => {
      const image = commonService.uploadImage(files, './public/Yugioh Poc/decks', 'Image');
      if (image) body.Image = image;     
      const deck = await commonService.update(YugiohPocDecks, body, ['Pros', 'Cons'], ['Image']);
      res.send(deck);
    })
  );

  router.get(
    '/decks/:modId',
    wrap(async ({ params: { modId } }, res, next) => {
      const decks = await commonService.getByParam(YugiohPocDecks, 'ModId', modId);
      res.send(decks);
    })
  );

  router.delete(
    '/deck/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonService.delete(YugiohPocDecks, id, ['Image']);
      res.send(result);
    })
  );

  return router;
};
