import express from 'express';
import moment from 'moment';

import regisUser from './services/regisUser';
import loginUser from './services/loginUser';
import editProfile from './services/editProfile';
import changePassword from './services/changePassword';

export default (models, factories, socket) => {
  const router = express.Router();
  const { wrap, commonSequelize } = factories;
  const { MembInfo } = models;

  router.post(
    '/register',
    wrap(async ({ body }, res, next) => {
      const account = await regisUser(models, factories, body);
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
    wrap(async (req, res, next) => {
      const account = await changePassword(MembInfo, req.body);
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
    wrap(async (req, res, next) => {
      const accounts = await commonSequelize.getAll(MembInfo);
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
      const account = await regisUser(models, factories, body);
      res.send(account);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonSequelize.delete(MembInfo, id);
      res.send(result);
    })
  );

  return router;
};

