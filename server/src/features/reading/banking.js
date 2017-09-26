var express = require('express');
var router = express.Router();
var async = require('async');

var char = require('../config/initdb').Character;
var bank = require('../config/initdb').BANKING;
var membinfo = require('../config/initdb').MEMB_INFO;

router.get('/getbalance/:memb___id', function(req, res, next) {
  bank.findOne({
    where: {
      memb___id: req.params.memb___id
    }
  }).then(function(acc) {
    res.send(acc);
  }).catch(next);
})

router.get('/withdraw', function(req, res, next) {
  var wittotal = parseInt(req.query.wittotal);
  var accid = req.query.memb___id;
  var charwit = req.query.charwit;
  var newbalance = null;
  var newmoney = null;
  var witerr = [];

  async.waterfall([
    function(nextFunc) {
      bank.findOne({
        where: {
          memb___id: accid
        }
      }).then(function(account) {
        var curbalance = parseInt(account.zen_balance);
        newbalance = curbalance - wittotal - 100000;
        if (newbalance < 0) {
          witerr.push({ msg: 'Your balance is not enough' });
          return res.send(witerr);
        } else {
          bank.update({
            zen_balance: newbalance
          }, {
            where: {
              memb___id: accid
            }
          }).then(function() {
            nextFunc();
          })
        }
      })
    },

    function(nextFunc) {
      char.findOne({
        where: {
          AccountID: accid,
          Name: charwit
        }
      }).then(function(charw) {
        newmoney = charw.Money + wittotal;
        if (newmoney > 2000000000) {
          witerr.push({ msg: 'You can not carry more than 2,000,000,000 Zen' })
          return res.send(witerr);
        } else {
          char.update({
            Money: newmoney
          }, {
            where: {
              AccountID: accid,
              Name: charwit
            }
          }).then(function() {
            nextFunc();
          })
        }
      })
    }

  ], function() {
    var data = {
      memb___id: accid,
      zen_balance: newbalance,
      char_name: charwit,
      char_money: newmoney
    }
    res.send(data);
  })
})

router.get('/loan_money', function(req, res, next){
  var accid = req.query.memb___id;
  var loanmoney = parseInt(req.query.loanmoney);
  var errors = [];

  bank.findOne({
    where: {
      memb___id: accid
    }
  }).then(function(banks){
    var newloan = loanmoney + banks.loan_money
    if(newloan > 10000000000){
      errors.push({
        'params': 'loanmoney',
        'msg': "You can't loan more than 10,000,000,000 Zen. Please, pay your dept first!",
        'value': 'undefined',
      })
      res.send(errors);
    } else {
      var newbalance = parseInt(banks.zen_balance) + loanmoney
      bank.update({
        zen_balance: newbalance,
        loan_money: newloan
      }, {
        where: {
          memb___id: accid
        }
      }).then(function(){
        var result = {
          memb___id: accid,
          zen_balance: newbalance,
          loan_money: newloan
        }
        res.send(result);
      })
    }
  })
})

router.get('/pay_dept', (req, res, next) => {
  var accid = req.query.memb___id;
  var paymoney = parseInt(req.query.paymoney);
  var errors = [];

  bank.findOne({
    where: {
      memb___id: accid
    }
  }).then(banks => {
    var zen_balance = parseInt(banks.zen_balance)
    if(paymoney > zen_balance){
      errors.push({
        'params': 'paymoney',
        'msg': "Your balance is not enough to pay your dept. Please, deposit more zen!",
        'value': 'undefined'
      })
      res.send(errors);
    } else {

      if(paymoney > banks.loan_money){
        paymoney = banks.loan_money;
      }

      var newbalance = zen_balance - paymoney;
      var newloan = banks.loan_money - paymoney;
      bank.update({
        zen_balance: newbalance,
        loan_money: newloan
      }, {
        where: {
          memb___id: accid
        }
      }).then(()=>{
        var result = {
          memb___id: accid,
          zen_balance: newbalance,
          loan_money: newloan,
        }
        res.send(result)
      })
    }
  })
})

router.get('/deposit', function(req, res, next) {
  var deptotal = parseInt(req.query.deptotal);
  var accid = req.query.memb___id;
  var chardep = req.query.chardep;
  var newbalance = null;
  var newmoney = null;
  var deperr = [];

  async.waterfall([
    function(nextFunc) {
      char.findOne({
        where: {
          AccountID: accid,
          Name: chardep
        }
      }).then(function(chard) {
        newmoney = chard.Money - deptotal - 100000;
        if (newmoney < 0) {
          deperr.push({ msg: 'Your zen is not enough' })
          return res.send(deperr)
        } else {
          char.update({
            Money: newmoney
          }, {
            where: {
              AccountID: accid,
              Name: chardep
            }
          }).then(function() {
            nextFunc()
          })
        }
      })
    },

    function(nextFunc) {
      bank.findOne({
        where: {
          memb___id: accid
        }
      }).then(function(account) {
        var curbalance = parseInt(account.zen_balance);
        newbalance = curbalance + deptotal;
        bank.update({
          zen_balance: newbalance
        }, {
          where: {
            memb___id: accid
          }
        }).then(function() {
          nextFunc()
        })
      })
    }

  ], function() {
    var data = {
      memb___id: accid,
      zen_balance: newbalance,
      char_name: chardep,
      char_money: newmoney
    }
    res.send(data)
  })

})

module.exports = router
