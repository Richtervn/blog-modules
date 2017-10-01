import getCharacters from './services/getCharacters';
import addPoints from './services/addPoints';
import reset from './services/reset';

export default (models, router, factories, helpers, appConfigs, methods) => {
  const { wrap, commonService } = factories;
  const { MembInfo, AccountCharacter, Character, MembCredits, Banking, ViCurInfo } = models;

  router.get(
    '/characters/get_chars/:id',
    wrap(async (req, res, next) => {
      const characters = await getCharacters(Character, req.params.id);
      res.send(characters);
    })
  );

  router.get(
    '/characters/add_point',
    wrap(async (req, res, next) => {
      const result = await addPoints(Character, Banking, req.query, appConfigs, methods);
      res.send(result);
    })
  );

  router.get('/characters/reset', wrap(async(req, res, next) => {
    const result = await reset(Character, Banking, MembCredits, req.query, appConfigs.GameSetting, methods);
    res.send(result);
  }))

  return router;
};

// //init grand reset formular
// function initGrandResetFormular(Character) {

//   var grandResetFormular = {}

//   //load base stats
//   if (_.contains([0, 1], Character.Class)) {
//     grandResetFormular = baseDW;
//   }

//   if (_.contains([16, 17], Character.Class)) {
//     grandResetFormular = baseDK;
//   }

//   if (_.contains([32, 33], Character.Class)) {
//     grandResetFormular = baseDK;
//   }

//   if (_.contains([48], Character.Class)) {
//     grandResetFormular = baseMG;
//   }

//   //set level, decrease reset, increase grandreset
//   grandResetFormular.cLevel = 1;
//   grandResetFormular.Resets = Character.Resets - 20;
//   grandResetFormular.GrandResets = Character.GrandResets + 1;

//   //load former resets
//   if (Character.Resets - 20 < 5) {
//     grandResetFormular.LevelUpPoint = ((Character.Resets + 1 - 20) * 300 + (Character.GrandResets * 1000))
//   } else {
//     grandResetFormular.LevelUpPoint = ((Character.Resets - 3 - 20) * 400 + (4 * 300) + (Character.GrandResets * 1000))
//   }

//   return grandResetFormular

// }

// //service reset character


// router.get('/grandreset', function(req, res, next) {

//   var characterName = req.query.Name;
//   var accountId = req.query.AccountID;
//   var useBank = req.query.UseBank;
//   var gresErr = [];

//   char.findOne({

//     attributes: [
//       'AccountID',
//       'Name',
//       'cLevel',
//       'Class',
//       'LevelUpPoint',
//       'Strength',
//       'Dexterity',
//       'Vitality',
//       'Energy',
//       'Resets',
//       'GrandResets',
//       'Money'
//     ],

//     where: {
//       AccountID: accountId,
//       Name: characterName
//     }

//   }).then(function(character) {
//     var newbalance = null;

//     async.waterfall([

//       function(nextFunc) {

//         if (character.Resets < 20) {
//           gresErr.push({ msg: 'You must have 20 resets or more' })
//           return res.send(gresErr);
//         } else if (character.cLevel < 350) {
//           gresErr.push({ msg: 'Grand Reset require 350 level' })
//           return res.send(gresErr);
//         } else if (useBank === 'false') {
//           gresErr.push({ msg: 'Grand Reset require 10,000,000,000 therefore you must use bank' })
//           return res.send(gresErr);
//         } else {
//           nextFunc();
//         }
//       },

//       function(nextFunc) {
//         bank.findOne({
//           where: {
//             memb___id: accountId
//           }
//         }).then(function(acc) {
//           var curbalance = parseInt(acc.zen_balance);
//           newbalance = curbalance - 10000000000;
//           if (curbalance < 10000000000) {
//             gresErr.push({ msg: 'Your balance must have atleast 10,000,000,000 Zen' })
//             return res.send(gresErr);
//           } else {
//             nextFunc();
//           }
//         })
//       }

//     ], function() {

//       var grsFormular = initGrandResetFormular(character);

//       char.update(grsFormular, {
//         where: {
//           AccountID: accountId,
//           Name: characterName
//         }
//       })

//       bank.update({
//         zen_balance: newbalance
//       }, {
//         where: {
//           memb___id: accountId
//         }
//       })

//       cred.findOne({
//         where: {
//           memb___id: accountId
//         }
//       }).then(function(acc) {
//         cred.update({
//           credits: acc.credits + 150
//         }, {
//           where: {
//             memb___id: accountId
//           }
//         })
//       })

//       grsFormular.zen_balance = newbalance;
//       res.send(grsFormular);

//     })
//   })
// })

// router.get('/pkclear', (req, res, next) => {

//   var memb___id = req.query.AccountID;
//   var name = req.query.Name;
//   var useBank = req.query.UseBank;

//   var errors = [];

//   if (useBank === 'false') {
//     char.findOne({
//       where: {
//         AccountID: memb___id,
//         Name: name
//       }
//     }).then(character => {
//       var paidZen = parseInt(character.Money) - parseInt(character.PkCount) * 50000000;
//       if (paidZen < 0) {
//         errors.push({
//           params: 'Money',
//           msg: 'You need' + paidZen + 'zen to clear your pk',
//           value: 'undefined'
//         })
//         return res.send(errors)
//       } else {
//         char.update({
//           'Money': paidZen,
//           'PkCount': 0,
//           'PkLevel': 0,
//           'PkTime': 0
//         }, {
//           where: {
//             AccountID: memb___id,
//             Name: name
//           }
//         }).then(() => {
//           var data = {
//             Money: paidZen,
//             PkCount: 0,
//             PkLevel: 0
//           }
//           res.send(data);
//         });
//       }
//     })
//   } else {
//     async.waterfall([
//       (nextFunc) => {
//         char.findOne({
//           where: {
//             AccountID: memb___id,
//             Name: name
//           }
//         }).then(character => {
//           var paidZen = parseInt(character.PkCount) * 50000000;
//           char.update({
//             'PkCount': 0,
//             'PkLevel': 0,
//             'PkTime': 0
//           }, {
//             where: {
//               AccountID: memb___id,
//               Name: name
//             }
//           })
//           nextFunc(null, paidZen);
//         })
//       },

//       (paidZen, nextFunc) => {
//         bank.findOne({
//           where: {
//             memb___id: memb___id
//           }
//         }).then(acc => {
//           var newbalance = parseInt(acc.zen_balance) - paidZen;

//           if (newbalance < 0) {
//             errors.push({
//               params: 'Money',
//               msg: 'You need' + paidZen + 'zen to clear your pk',
//               value: 'undefined'
//             })
//             return res.send(errors)
//           }

//           bank.update({
//             zen_balance: newbalance
//           }, {
//             where: {
//               memb___id: memb___id
//             }
//           })
//           nextFunc(null, newbalance);
//         })
//       }

//     ], (err, newbalance) => {
//       if (err) {
//         return next(err);
//       }
//       var data = {
//         'zen_balance': newbalance,
//         'PkLevel': 0,
//         'PkCount': 0,
//         'PkTime': 0
//       }
//       res.send(data);
//     })
//   }
// })

// router.get('/change_name', (req, res, next) => {
//   var AccountID = req.query.AccountID;
//   var Name = req.query.Name;
//   var NewName = req.query.NewName;
//   var UseBank = req.query.UseBank;

//   var errors = [];

//   async.parallel([

//       (callback) => {
//         char.findOne({
//           attributes: [
//             'AccountID',
//             'Name',
//             'Money'
//           ],
//           where: {
//             AccountID: AccountID,
//             Name: Name
//           }
//         }).then(character => {
//           if (UseBank === 'false') {
//             paidZen = parseInt(character.Money) - 2000000000;
//             if (paidZen < 0) {
//               errors.push({
//                 params: 'Money',
//                 msg: "Changing Character's Name required 2,000,000,000 Zen",
//                 value: 'undefined'
//               })
//             }
//             callback(null, character.dataValues, paidZen)
//           } else {
//             callback(null, null, null);
//           }
//         })
//       },

//       (callback) => {
//         if (UseBank === 'true') {
//           bank.findOne({
//             where: {
//               memb___id: AccountID
//             }
//           }).then(acc => {
//             var paidBank = parseInt(acc.zen_balance) - 2000000000;
//             if (paidBank < 0) {
//               errors.push({
//                 params: 'Bank',
//                 msg: "Changing Character's Name required 2,000,000,000 Zen",
//                 value: 'undefined'
//               })
//             }
//             callback(null, acc.dataValues, paidBank);
//           })
//         } else {
//           callback(null, null, null);
//         }
//       },

//       (callback) => {
//         cred.findOne({
//           where: {
//             memb___id: AccountID
//           }
//         }).then(credit => {
//           var paidCred = parseInt(credit.credits) - 100;
//           if (paidCred < 0) {
//             errors.push({
//               params: 'Credit',
//               msg: "Changing Character's Name required 100 credits",
//               value: 'undefined'
//             })
//           }
//           callback(null, credit, paidCred);
//         })
//       },

//       (callback) => {
//         AccChar.findOne({
//           where: {
//             Id: AccountID
//           }
//         }).then(accChar => {
//           for (var key in accChar.dataValues) {
//             if (accChar.dataValues[key] === Name && key != 'Id') {
//               var getKey = key;
//             }
//           }
//           var options = {};
//           options[getKey] = NewName;
//           callback(null, options);
//         })
//       }
//     ],

//     (err, results) => {
//       var character = results[0][0];
//       var paidZen = 0;
//       var accbank = results[1][0];
//       var paidBank = results[1][1];
//       var credit = results[2][0];
//       var paidCred = results[2][1];
//       var options = results[3];

//       if (errors.length > 0) {
//         return res.send(errors)
//       } else {

//         char.update({
//           Name: NewName,
//           Money: paidZen
//         }, {
//           where: {
//             AccountID: AccountID,
//             Name: Name
//           }
//         })

//         cred.update({
//           credits: paidCred
//         }, {
//           where: {
//             memb___id: AccountID
//           }
//         })

//         AccChar.update(options, {
//           where: {
//             Id: AccountID
//           }
//         })

//         if (UseBank === 'true') {
//           bank.update({
//             zen_balance: paidBank
//           }, {
//             where: {
//               memb___id: AccountID
//             }
//           })
//           var data = {
//             zen_balance: paidBank,
//             Name: NewName,
//             credits: paidCred
//           }
//           res.send(data);
//         } else {
//           var data = {
//             Name: NewName,
//             Money: paidZen,
//             credits: paidCred
//           }
//           res.send(data);
//         }
//       }
//     })
// })

// router.get('/get_character_name', (req, res, next) => {

//   var result = [];

//   AccChar.findOne({
//     where: {
//       Id: req.session.user.memb___id
//     }
//   }).then(accChar => {
//     for (var key in accChar.dataValues) {
//       if (_.contains(['GameID1', 'GameID2', 'GameID3', 'GameID4', 'GameID5'], key) && accChar.dataValues[key] != null) {
//         result.push(accChar.dataValues[key]);
//       }
//     }
//     res.send(result)
//   }).catch(next);
// })

// router.get('/test', (req, res, next) => {
//   var getKey = '';

//   AccChar.findOne({
//     where: {
//       Id: 'Richter'
//     }
//   }).then(accChar => {
//     for (var key in accChar.dataValues) {
//       if (accChar.dataValues[key] === 'Richter' && key != 'Id')
//         getKey = key
//     }
//     var obj = {};
//     obj[getKey] = 'Richter';

//     // var test = _.findKey(accChar, 'Richter');
//     // var test2 = _.invert(accChar)['Richter'];
//     // console.log(test);
//     // console.log(test2);
//     // res.send(test);
//   })
// })

// module.exports = router;
