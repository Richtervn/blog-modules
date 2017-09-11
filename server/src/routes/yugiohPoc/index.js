import express from 'express';

import addMod from './services/addMod';
import uploadModImgs from './services/uploadModImgs';

export default (YugiohPocMods, YugiohPocDecks, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.get('/test', (req, res, next) => {
    res.send('ok');
  });

  router.post(
    '/add_mod',
    wrap(async (req, res, next) => {
      const body = await uploadModImgs(req, res);
      const mod = await addMod(YugiohPocMods, body);
      res.send(mod);
    })
  );

  return router;
};
