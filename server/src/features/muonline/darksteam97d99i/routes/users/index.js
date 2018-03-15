import express from 'express';
import moment from 'moment';

import addUser from './services/addUser';

import regisUser from './services/regisUser';
import loginUser from './services/loginUser';
import editProfile from './services/editProfile';
import changePassword from './services/changePassword';

export default (models, methods, factories, helpers, io) => {
  const router = express.Router();
  const { wrap, commonSequelize } = factories;
  const { MembInfo, MembCredits, AccountCharacter, UserReceipt, UserWebQuest, Banking, Character } = models;

  router.post(
    '/register',
    wrap(async ({ body }, res, next) => {
      const account = await regisUser(models, factories, helpers, body);
      res.send(account);
    })
  );

  router.post(
    '/login',
    wrap(async ({ body }, res, next) => {
      const account = await loginUser(models, body);
      res.send(account);
    })
  );

  router.put(
    '/profile',
    wrap(async ({ body }, res, next) => {
      const account = await editProfile(MembInfo, body, factories);
      res.send(account);
    })
  );

  router.put(
    '/change_password',
    wrap(async ({ body }, res, next) => {
      const account = await changePassword(MembInfo, body);
      res.send(account);
    })
  );

  router.get(
    '/recover_password/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const account = await commonSequelize.getOne(MembInfo, id);
      res.send(account);
    })
  );

  /*admin routing*/
  router.get(
    '/',
    wrap(async ({ query }, res, next) => {
      const accounts = await commonSequelize.getAll(MembInfo, query);
      res.send(accounts);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const account = await commonSequelize.update(MembInfo, body, { transform: ['IsVip', 'mail_chek'] });
      res.send(account);
    })
  );

  router.post(
    '/',
    wrap(async ({ body }, res, next) => {
      const account = await addUser(models, factories, helpers, body);
      res.send(account);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      [
        await commonSequelize.delete(MembInfo, id),
        await commonSequelize.delete(MembCredits, id),
        await commonSequelize.delete(Banking, id),
        await commonSequelize.delete(AccountCharacter, id),
        await commonSequelize.deleteAll(Character, { AccountID: id }),
        await commonSequelize.deleteAll(UserReceipt, { memb___id: id }),
        await commonSequelize.deleteAll(UserWebQuest, { memb___id: id })
      ];
      res.send({ id });
    })
  );

  return router;
};
