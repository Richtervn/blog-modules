import deposit from './services/deposit';
import loan from './services/loan';
import transfer from './services/transfer';
import buyCredit from './services/buyCredit';
import withdraw from './services/withdraw';

/*Test result*/
// for(let key in io.sockets.connected){
//   console.log(io.sockets.connected[key].memb___id);
// }

export default (models, router, factories, helpers, appConfigs) => {
  const { wrap } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;
  const { bankLogger } = helpers;

  router.get(
    '/banking/deposit',
    wrap(async (req, res, next) => {
      const result = await deposit(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
      res.send(result);
    })
  );

  router.get(
    '/banking/loan',
    wrap(async (req, res, next) => {
      const result = await loan(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
      res.send(result);
    })
  );

  router.get(
    '/banking/withdraw',
    wrap(async (req, res, next) => {
      const result = await withdraw(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
      res.send(result);
    })
  );

  router.get(
    '/banking/transfer',
    wrap(async (req, res, next) => {
      const result = await transfer(Banking, Character, req.query, appConfigs.GameSetting, bankLogger);
      res.send(result);
    })
  );

  router.get(
    '/banking/buy_credit',
    wrap(async (req, res, next) => {
      const result = await buyCredit(
        Banking,
        Character,
        MembCredits,
        req.query,
        appConfigs.GameSetting,
        bankLogger
      );
      res.send(result);
    })
  );

  return router;
};
