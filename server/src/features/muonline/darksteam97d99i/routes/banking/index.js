import express from 'express';

import deposit from './services/deposit';
import loan from './services/loan';
import transfer from './services/transfer';
import buyCredit from './services/buyCredit';
import sellCredit from './services/sellCredit';
import withdraw from './services/withdraw';

export default (models, methods, factories, helpers) => {
  const router = express.Router();
  const { wrap, commonSequelize } = factories;
  const { BankingLog, Banking, UserBankingLog } = models;
  const { getData, bankProfitLog } = helpers;

  router.get(
    '/logs',
    wrap(async ({ query }, res, next) => {
      const logs = await commonSequelize.getAll(BankingLog, query);
      res.send(logs);
    })
  );

  router.get(
    '/user_logs/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const logs = await commonSequelize.getAll(UserBankingLog, { memb___id: id });
      res.send(logs);
    })
  );

  router.get(
    '/deposit',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await deposit(models, query, GameSetting, bankProfitLog);
      res.send(result);
    })
  );

  router.get(
    '/loan',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await loan(models, query, GameSetting, bankProfitLog);
      res.send(result);
    })
  );

  router.get(
    '/withdraw',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await withdraw(models, query, GameSetting, bankProfitLog);
      res.send(result);
    })
  );

  router.get(
    '/transfer',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await transfer(models, query, GameSetting, bankProfitLog);
      res.send(result);
    })
  );

  router.get(
    '/buy_credit',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await buyCredit(models, query, GameSetting);
      res.send(result);
    })
  );

  router.get(
    '/sell_credit',
    wrap(async ({ query }, res, next) => {
      const GameSetting = await getData('GameSetting');
      const result = await sellCredit(models, query, GameSetting);
      res.send(result);
    })
  );

  router.get(
    '/',
    wrap(async ({ query }, res, next) => {
      const banks = await commonSequelize.getAll(Banking, query);
      res.send(banks);
    })
  );

  router.post(
    '/',
    wrap(async ({ body }, res, next) => {
      console.log(body);
      const result = await commonSequelize.create(Banking, body);
      res.send(result);
    })
  );

  router.put(
    '/',
    wrap(async ({ body }, res, next) => {
      const result = await commonSequelize.update(Banking, body);
      res.send(result);
    })
  );

  router.delete(
    '/:id',
    wrap(async ({ params: { id } }, res, next) => {
      const result = await commonSequelize.delete(Banking, id);
      res.send(result);
    })
  );

  return router;
};
