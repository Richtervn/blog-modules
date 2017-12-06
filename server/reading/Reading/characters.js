//import modules
var express = require('express');
var router = express.Router();
var _ = require('underscore');
var async = require('async');

//import models
var char = require('../config/initdb').Character;
var cred = require('../config/initdb').MEMB_CREDITS;
var bank = require('../config/initdb').BANKING;
var AccChar = require('../config/initdb').AccountCharacter

//check user session
router.all('*', function(req, res, next) {
  if (req.session.user) {
    return next();
  }
})

//init default base stats for classes
var baseDW = { 'Strength': 18, 'Dexterity': 18, 'Vitality': 15, 'Energy': 30 };
var baseDK = { 'Strength': 28, 'Dexterity': 20, 'Vitality': 25, 'Energy': 10 };
var baseMG = { 'Strength': 26, 'Dexterity': 26, 'Vitality': 26, 'Energy': 16 };
var baseELF = { 'Strength': 22, 'Dexterity': 25, 'Vitality': 20, 'Energy': 15 };


//init reset formular
function initResetFormular(Character, useBank) {

  var resetFormular = {}

  //load base stats
  if (_.contains([0, 1], Character.Class)) {
    resetFormular = baseDW;
  }

  if (_.contains([16, 17], Character.Class)) {
    resetFormular = baseDK;
  }

  if (_.contains([32, 33], Character.Class)) {
    resetFormular = baseDK;
  }

  if (_.contains([48], Character.Class)) {
    resetFormular = baseMG;
  }

  //load former reset stats
  if (Character.cLevel >= 300 + Character.Resets * 10 && Character.cLevel < 350) {
    resetFormular.LevelUpPoint = ((Character.Resets + 1) * 300 + Character.GrandResets * 1000);
  } else if (Character.cLevel >= 350) {
    resetFormular.LevelUpPoint = ((Character.Resets - 3) * 400 + 4 * 300 + Character.GrandResets * 1000);
  }

  //reset level to 1 and increase resets
  resetFormular.cLevel = 1;
  resetFormular.Resets = Character.Resets + 1;

  //load options for bank using
  if (useBank === 'false') {
    resetFormular.Money = Character.Money - 1000000000;
  }

  return resetFormular;
}

//init grand reset formular
function initGrandResetFormular(Character) {

  var grandResetFormular = {}

  //load base stats
  if (_.contains([0, 1], Character.Class)) {
    grandResetFormular = baseDW;
  }

  if (_.contains([16, 17], Character.Class)) {
    grandResetFormular = baseDK;
  }

  if (_.contains([32, 33], Character.Class)) {
    grandResetFormular = baseDK;
  }

  if (_.contains([48], Character.Class)) {
    grandResetFormular = baseMG;
  }

  //set level, decrease reset, increase grandreset
  grandResetFormular.cLevel = 1;
  grandResetFormular.Resets = Character.Resets - 20;
  grandResetFormular.GrandResets = Character.GrandResets + 1;

  //load former resets
  if (Character.Resets - 20 < 5) {
    grandResetFormular.LevelUpPoint = ((Character.Resets + 1 - 20) * 300 + (Character.GrandResets * 1000))
  } else {
    grandResetFormular.LevelUpPoint = ((Character.Resets - 3 - 20) * 400 + (4 * 300) + (Character.GrandResets * 1000))
  }

  return grandResetFormular

}

//service reset character
router.get('/reset', function(req, res, next) {

  //catch request params
  var characterName = req.query.Name;
  var accountId = req.query.AccountID;
  var useBank = req.query.UseBank;
  var resErr = [];

  //find this character
  char.findOne({

    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'LevelUpPoint',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'Money'
    ],

    where: {
      AccountID: accountId,
      Name: characterName
    }

  }).then(function(character) {
    var curbalance = null;

    async.waterfall([

      //check character level
      function(nextFunc) {

        if (character.cLevel < 300 + character.Resets * 10 && character.cLevel) {
          resErr.push({ msg: 'This character does not have enough level' });
          return res.send(resErr);
        } else {
          nextFunc()
        }

      },

      //check zen required 1,000,000,000
      function(nextFunc) {

        //check zen in inventory
        if (character.Money < 1000000000 && useBank === 'false') {
          resErr.push({ msg: 'Reset require 1,000,000,000 Zen' });
          return res.send(resErr);
        } else {

          //check zen in bank
          bank.findOne({
            where: {
              'memb___id': accountId
            }
          }).then(function(acc) {

            //set current balance
            curbalance = parseInt(acc.zen_balance)

            //check current balance
            if (curbalance < 1000000000 && useBank === 'true') {
              resErr.push({ msg: 'Your balance is not enough' });
              return res.send(resErr);
            } else {
              nextFunc();
            }

          })
        }

      },

    ], function() {

      //Create reset formular by calling initResetFormular function
      var formular = initResetFormular(character, useBank);

      //Update character acording to formular
      char.update(formular, {
        where: {
          AccountID: accountId,
          Name: characterName
        }
      })

      if (useBank === 'true') {

        bank.update({
          zen_balance: curbalance - 1000000000
        }, {
          where: {
            'memb___id': accountId
          }
        })

        cred.findOne({
          where: {
            memb___id: accountId
          }
        }).then(function(acc) {
          cred.update({
            credits: acc.credits + 10
          }, {
            where: {
              memb___id: accountId
            }
          })
        })

        data = formular;
        data.zen_balance = curbalance - 1000000000;
        res.send(data);

      } else {
        res.send(formular);
      }

    })

  })

})

router.get('/grandreset', function(req, res, next) {

  var characterName = req.query.Name;
  var accountId = req.query.AccountID;
  var useBank = req.query.UseBank;
  var gresErr = [];

  char.findOne({

    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'LevelUpPoint',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'Money'
    ],

    where: {
      AccountID: accountId,
      Name: characterName
    }

  }).then(function(character) {
    var newbalance = null;

    async.waterfall([

      function(nextFunc) {

        if (character.Resets < 20) {
          gresErr.push({ msg: 'You must have 20 resets or more' })
          return res.send(gresErr);
        } else if (character.cLevel < 350) {
          gresErr.push({ msg: 'Grand Reset require 350 level' })
          return res.send(gresErr);
        } else if (useBank === 'false') {
          gresErr.push({ msg: 'Grand Reset require 10,000,000,000 therefore you must use bank' })
          return res.send(gresErr);
        } else {
          nextFunc();
        }
      },

      function(nextFunc) {
        bank.findOne({
          where: {
            memb___id: accountId
          }
        }).then(function(acc) {
          var curbalance = parseInt(acc.zen_balance);
          newbalance = curbalance - 10000000000;
          if (curbalance < 10000000000) {
            gresErr.push({ msg: 'Your balance must have atleast 10,000,000,000 Zen' })
            return res.send(gresErr);
          } else {
            nextFunc();
          }
        })
      }

    ], function() {

      var grsFormular = initGrandResetFormular(character);

      char.update(grsFormular, {
        where: {
          AccountID: accountId,
          Name: characterName
        }
      })

      bank.update({
        zen_balance: newbalance
      }, {
        where: {
          memb___id: accountId
        }
      })

      cred.findOne({
        where: {
          memb___id: accountId
        }
      }).then(function(acc) {
        cred.update({
          credits: acc.credits + 150
        }, {
          where: {
            memb___id: accountId
          }
        })
      })

      grsFormular.zen_balance = newbalance;
      res.send(grsFormular);

    })
  })
})

function checkPay(errArr, accountId, characterName, pointsAdd, attribute, res, next) {
  errArr = [];
  bank.findOne({
    where: {
      memb___id: accountId
    }
  }).then(function(acc) {

    var curbalance = parseInt(acc.zen_balance);

    if (curbalance < 10000) {
      errArr.push({ msg: 'Your balance is not enough' });
      return res.send(errArr);
    } else {

      char.findOne({
        attributes: [
          'AccountID',
          'Name',
          'Dexterity',
          'Strength',
          'Vitality',
          'Energy',
          'LevelUpPoint',
          'Money'
        ],
        where: {
          AccountID: accountId,
          Name: characterName
        }
      }).then(function(charUp) {

        if (charUp.LevelUpPoint < pointsAdd) {
          errArr.push({ msg: 'This character does not have enough points' });
          return res.send(errArr);
        } else {

          var opt = {
            LevelUpPoint: charUp.LevelUpPoint - pointsAdd
          }

          switch (attribute) {
            case 'Strength':
              opt.Strength = charUp.Strength + pointsAdd;
              break;
            case 'Dexterity':
              opt.Dexterity = charUp.Dexterity + pointsAdd;
              break;
            case 'Energy':
              opt.Energy = charUp.Energy + pointsAdd;
              break;
            case 'Vitality':
              opt.Vitality = charUp.Vitality + pointsAdd;
              break;
          }

          charUp.update(opt, {
            where: {
              AccountID: accountId,
              Name: characterName
            }
          })

          bank.update({
            'zen_balance': curbalance - 10000
          }, {
            where: {
              memb___id: accountId
            }
          })

          var data = {
            'memb___id': accountId,
            'zen_balance': curbalance - 10000
          }

          res.send(data);
        }
      })
    }
  })
}

function cashPay(errArr, accountId, characterName, pointsAdd, attribute, res, next) {
  errArr = [];
  char.findOne({
    attributes: [
      'AccountID',
      'Name',
      'Dexterity',
      'Strength',
      'Vitality',
      'Energy',
      'LevelUpPoint',
      'Money'
    ],
    where: {
      AccountID: accountId,
      Name: characterName
    }
  }).then(function(charUp) {
    if (charUp.LevelUpPoint < pointsAdd) {
      errArr.push({ msg: 'This character does not have enough points' })
      return res.send(errArr);
    } else if (charUp.Money < 10000) {
      errArr.push({ msg: 'This character does not have enough Zen' })
      return res.send(errArr);
    } else {

      var opt = {
        LevelUpPoint: charUp.LevelUpPoint - pointsAdd,
        Money: charUp.Money - 10000,
      }

      switch (attribute) {
        case 'Strength':
          opt.Strength = charUp.Strength + pointsAdd;
          break;
        case 'Dexterity':
          opt.Dexterity = charUp.Dexterity + pointsAdd;
          break;
        case 'Energy':
          opt.Energy = charUp.Energy + pointsAdd;
          break;
        case 'Vitality':
          opt.Vitality = charUp.Vitality + pointsAdd;
          break;
      }

      charUp.update(opt, {
        where: {
          AccountID: accountId,
          Name: characterName
        }
      }).then(function() {
        res.sendStatus(200);
      })
    }
  })
}

router.get('/addstr', function(req, res, next) {
  var accountId = req.query.AccountID;
  var useBank = req.query.UseBank;
  var characterName = req.query.Name;
  var addStr = parseInt(req.query.AddStr);
  var addErr = [];

  if (useBank === 'false') {
    cashPay(addErr, accountId, characterName, addStr, 'Strength', res, next);
  } else {
    checkPay(addErr, accountId, characterName, addStr, 'Strength', res, next);
  }

})

router.get('/addagi', function(req, res, next) {
  var addAgi = parseInt(req.query.AddAgi);
  var useBank = req.query.UseBank;
  var accountId = req.query.AccountID;
  var characterName = req.query.Name;
  var addErr = [];

  if (useBank === 'false') {
    cashPay(addErr, accountId, characterName, addAgi, 'Dexterity', res, next);
  } else {
    checkPay(addErr, accountId, characterName, addAgi, 'Dexterity', res, next);
  }
})

router.get('/addene', function(req, res, next) {
  var addEne = parseInt(req.query.AddEne);
  var accountId = req.query.AccountID;
  var characterName = req.query.Name;
  var useBank = req.query.UseBank;
  var addErr = [];

  if (useBank === 'false') {
    cashPay(addErr, accountId, characterName, addEne, 'Energy', res, next);
  } else {
    checkPay(addErr, accountId, characterName, addEne, 'Energy', res, next);
  }

})

router.get('/addvit', function(req, res, next) {
  var addVit = parseInt(req.query.AddVit);
  var accountId = req.query.AccountID;
  var characterName = req.query.Name;
  var useBank = req.query.UseBank;
  var addErr = [];

  if (useBank === 'false') {
    cashPay(addErr, accountId, characterName, addVit, 'Vitality', res, next);
  } else {
    checkPay(addErr, accountId, characterName, addVit, 'Vitality', res, next);
  }
})

router.get('/getchar/:memb___id', function(req, res, next) {
  char.findAll({
    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'LevelUpPoint',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'PkCount',
      'PkLevel',
      'Money'
    ],
    where: {
      AccountID: req.params.memb___id
    }
  }).then(function(chars) {
    res.send(chars)
  }).catch(next)
})

router.get('/pkclear', (req, res, next) => {

  var memb___id = req.query.AccountID;
  var name = req.query.Name;
  var useBank = req.query.UseBank;

  var errors = [];

  if (useBank === 'false') {
    char.findOne({
      where: {
        AccountID: memb___id,
        Name: name
      }
    }).then(character => {
      var paidZen = parseInt(character.Money) - parseInt(character.PkCount) * 50000000;
      if (paidZen < 0) {
        errors.push({
          params: 'Money',
          msg: 'You need' + paidZen + 'zen to clear your pk',
          value: 'undefined'
        })
        return res.send(errors)
      } else {
        char.update({
          'Money': paidZen,
          'PkCount': 0,
          'PkLevel': 0,
          'PkTime': 0
        }, {
          where: {
            AccountID: memb___id,
            Name: name
          }
        }).then(() => {
          var data = {
            Money: paidZen,
            PkCount: 0,
            PkLevel: 0
          }
          res.send(data);
        });
      }
    })
  } else {
    async.waterfall([
      (nextFunc) => {
        char.findOne({
          where: {
            AccountID: memb___id,
            Name: name
          }
        }).then(character => {
          var paidZen = parseInt(character.PkCount) * 50000000;
          char.update({
            'PkCount': 0,
            'PkLevel': 0,
            'PkTime': 0
          }, {
            where: {
              AccountID: memb___id,
              Name: name
            }
          })
          nextFunc(null, paidZen);
        })
      },

      (paidZen, nextFunc) => {
        bank.findOne({
          where: {
            memb___id: memb___id
          }
        }).then(acc => {
          var newbalance = parseInt(acc.zen_balance) - paidZen;

          if (newbalance < 0) {
            errors.push({
              params: 'Money',
              msg: 'You need' + paidZen + 'zen to clear your pk',
              value: 'undefined'
            })
            return res.send(errors)
          }

          bank.update({
            zen_balance: newbalance
          }, {
            where: {
              memb___id: memb___id
            }
          })
          nextFunc(null, newbalance);
        })
      }

    ], (err, newbalance) => {
      if (err) {
        return next(err);
      }
      var data = {
        'zen_balance': newbalance,
        'PkLevel': 0,
        'PkCount': 0,
        'PkTime': 0
      }
      res.send(data);
    })
  }
})

router.get('/change_name', (req, res, next) => {
  var AccountID = req.query.AccountID;
  var Name = req.query.Name;
  var NewName = req.query.NewName;
  var UseBank = req.query.UseBank;

  var errors = [];

  async.parallel([

      (callback) => {
        char.findOne({
          attributes: [
            'AccountID',
            'Name',
            'Money'
          ],
          where: {
            AccountID: AccountID,
            Name: Name
          }
        }).then(character => {
          if (UseBank === 'false') {
            paidZen = parseInt(character.Money) - 2000000000;
            if (paidZen < 0) {
              errors.push({
                params: 'Money',
                msg: "Changing Character's Name required 2,000,000,000 Zen",
                value: 'undefined'
              })
            }
            callback(null, character.dataValues, paidZen)
          } else {
            callback(null, null, null);
          }
        })
      },

      (callback) => {
        if (UseBank === 'true') {
          bank.findOne({
            where: {
              memb___id: AccountID
            }
          }).then(acc => {
            var paidBank = parseInt(acc.zen_balance) - 2000000000;
            if (paidBank < 0) {
              errors.push({
                params: 'Bank',
                msg: "Changing Character's Name required 2,000,000,000 Zen",
                value: 'undefined'
              })
            }
            callback(null, acc.dataValues, paidBank);
          })
        } else {
          callback(null, null, null);
        }
      },

      (callback) => {
        cred.findOne({
          where: {
            memb___id: AccountID
          }
        }).then(credit => {
          var paidCred = parseInt(credit.credits) - 100;
          if (paidCred < 0) {
            errors.push({
              params: 'Credit',
              msg: "Changing Character's Name required 100 credits",
              value: 'undefined'
            })
          }
          callback(null, credit, paidCred);
        })
      },

      (callback) => {
        AccChar.findOne({
          where: {
            Id: AccountID
          }
        }).then(accChar => {
          for (var key in accChar.dataValues) {
            if (accChar.dataValues[key] === Name && key != 'Id') {
              var getKey = key;
            }
          }
          var options = {};
          options[getKey] = NewName;
          callback(null, options);
        })
      }
    ],

    (err, results) => {
      var character = results[0][0];
      var paidZen = 0;
      var accbank = results[1][0];
      var paidBank = results[1][1];
      var credit = results[2][0];
      var paidCred = results[2][1];
      var options = results[3];

      if (errors.length > 0) {
        return res.send(errors)
      } else {

        char.update({
          Name: NewName,
          Money: paidZen
        }, {
          where: {
            AccountID: AccountID,
            Name: Name
          }
        })

        cred.update({
          credits: paidCred
        }, {
          where: {
            memb___id: AccountID
          }
        })

        AccChar.update(options, {
          where: {
            Id: AccountID
          }
        })

        if (UseBank === 'true') {
          bank.update({
            zen_balance: paidBank
          }, {
            where: {
              memb___id: AccountID
            }
          })
          var data = {
            zen_balance: paidBank,
            Name: NewName,
            credits: paidCred
          }
          res.send(data);
        } else {
          var data = {
            Name: NewName,
            Money: paidZen,
            credits: paidCred
          }
          res.send(data);
        }
      }
    })
})

router.get('/get_character_name', (req, res, next) => {

  var result = [];

  AccChar.findOne({
    where: {
      Id: req.session.user.memb___id
    }
  }).then(accChar => {
    for (var key in accChar.dataValues) {
      if (_.contains(['GameID1', 'GameID2', 'GameID3', 'GameID4', 'GameID5'], key) && accChar.dataValues[key] != null) {
        result.push(accChar.dataValues[key]);
      }
    }
    res.send(result)
  }).catch(next);
})

router.get('/test', (req, res, next) => {
  var getKey = '';

  AccChar.findOne({
    where: {
      Id: 'Richter'
    }
  }).then(accChar => {
    for (var key in accChar.dataValues) {
      if (accChar.dataValues[key] === 'Richter' && key != 'Id')
        getKey = key
    }
    var obj = {};
    obj[getKey] = 'Richter';


    // var test = _.findKey(accChar, 'Richter');
    // var test2 = _.invert(accChar)['Richter'];
    // console.log(test);
    // console.log(test2);
    // res.send(test);
  })
})

module.exports = router;
