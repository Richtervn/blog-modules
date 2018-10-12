import express from 'express';
import config from './config';

export default (Account, factories) => {
  const router = express.Router();
  const { wrap, commonService } = factories;

  router.post(
    '/',
    wrap(async ({ body, files }, res, next) => {
      const icon = commonService.uploadImage(files, './public/Account', 'Icon');
      if (icon) body.Icon = icon;
      const account = await commonService.create(Account, body);
      res.send(account);
    })
  );

  router.put(
    '/',
    wrap(async ({ body, files }, res, next) => {
      const icon = commonService.uploadImage(files, './public/Account', 'Icon');
      if (icon) body.Icon = icon;
      const account = await commonService.update(Account, body, null, ['Icon']);
      res.send(account);
    })
  );

  router.get(
    '/',
    wrap(async (req, res, next) => {
      const accounts = await commonService.getAll(Account);
      res.send(accounts);
    })
  );

  router.get(
    '/search',
    wrap(async ({ query }, res, next) => {
      const accounts = await commonService.search(Account, query);
      res.send(accounts);
    })
  );

  router.post(
    '/verify',
    wrap(async ({ body }, res, next) => {
      if (body.username !== config.username) {
        return res.send({ message: 'Wrong user name' });
      }
      if (body.password !== config.password) {
        return res.send({ message: 'Wrong password' });
      }
      res.send(body);
    })
  );

  return router;
};
