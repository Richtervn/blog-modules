import express from 'express';

import deposit from './services/deposit';
import loan from './services/loan';
import transfer from './services/transfer';
import buyCredit from './services/buyCredit';
import withdraw from './services/withdraw';

export default (models, methods, factories, helpers, io) => {
  const router = express.Router();
  const { wrap, commonSequelize } = factories;
  const { BankingLog } = models;
  const { bankProfitLog } = helpers;

  router.get(
    '/logs',
    wrap(async ({ query }, res, next) => {
      const logs = await commonSequelize.getAll(BankingLog, query);
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

  return router;
};
// export default (models, router, factories, helpers, appConfigs) => {

//   const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;
//   const { bankLogger } = helpers;

//   router.get(
//     '/banking/loan',
//     wrap(async (req, res, next) => {
//       const result = await loan(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
//       res.send(result);
//     })
//   );

//   router.get(
//     '/banking/withdraw',
//     wrap(async (req, res, next) => {
//       const result = await withdraw(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
//       res.send(result);
//     })
//   );

//   router.get(
//     '/banking/transfer',
//     wrap(async (req, res, next) => {
//       const result = await transfer(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
//       res.send(result);
//     })
//   );

//   router.get(
//     '/banking/buy_credit',
//     wrap(async (req, res, next) => {
//       const result = await buyCredit(
//         Banking,
//         Character,
//         MembCredits,
//         req.query,
//         appConfigs.GameSetting,
//         bankLogger
//       );
//       res.send(result);
//     })
//   );

//   return router;
// };
