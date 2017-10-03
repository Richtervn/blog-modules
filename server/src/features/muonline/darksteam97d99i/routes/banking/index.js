import deposit from './services/deposit';
import loan from './services/loan';

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
};

// router.get('/withdraw', function(req, res, next) {
//   var wittotal = parseInt(req.query.wittotal);
//   var accid = req.query.memb___id;
//   var charwit = req.query.charwit;
//   var newbalance = null;
//   var newmoney = null;
//   var witerr = [];

//   async.waterfall([
//     function(nextFunc) {
//       bank.findOne({
//         where: {
//           memb___id: accid
//         }
//       }).then(function(account) {
//         var curbalance = parseInt(account.zen_balance);
//         newbalance = curbalance - wittotal - 100000;
//         if (newbalance < 0) {
//           witerr.push({ msg: 'Your balance is not enough' });
//           return res.send(witerr);
//         } else {
//           bank.update({
//             zen_balance: newbalance
//           }, {
//             where: {
//               memb___id: accid
//             }
//           }).then(function() {
//             nextFunc();
//           })
//         }
//       })
//     },

//     function(nextFunc) {
//       char.findOne({
//         where: {
//           AccountID: accid,
//           Name: charwit
//         }
//       }).then(function(charw) {
//         newmoney = charw.Money + wittotal;
//         if (newmoney > 2000000000) {
//           witerr.push({ msg: 'You can not carry more than 2,000,000,000 Zen' })
//           return res.send(witerr);
//         } else {
//           char.update({
//             Money: newmoney
//           }, {
//             where: {
//               AccountID: accid,
//               Name: charwit
//             }
//           }).then(function() {
//             nextFunc();
//           })
//         }
//       })
//     }

//   ], function() {
//     var data = {
//       memb___id: accid,
//       zen_balance: newbalance,
//       char_name: charwit,
//       char_money: newmoney
//     }
//     res.send(data);
//   })
// })

// router.get('/pay_dept', (req, res, next) => {
//   var accid = req.query.memb___id;
//   var paymoney = parseInt(req.query.paymoney);
//   var errors = [];

//   bank.findOne({
//     where: {
//       memb___id: accid
//     }
//   }).then(banks => {
//     var zen_balance = parseInt(banks.zen_balance)
//     if(paymoney > zen_balance){
//       errors.push({
//         'params': 'paymoney',
//         'msg': "Your balance is not enough to pay your dept. Please, deposit more zen!",
//         'value': 'undefined'
//       })
//       res.send(errors);
//     } else {

//       if(paymoney > banks.loan_money){
//         paymoney = banks.loan_money;
//       }

//       var newbalance = zen_balance - paymoney;
//       var newloan = banks.loan_money - paymoney;
//       bank.update({
//         zen_balance: newbalance,
//         loan_money: newloan
//       }, {
//         where: {
//           memb___id: accid
//         }
//       }).then(()=>{
//         var result = {
//           memb___id: accid,
//           zen_balance: newbalance,
//           loan_money: newloan,
//         }
//         res.send(result)
//       })
//     }
//   })
// })

// module.exports = router
