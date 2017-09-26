var express = require('express');
var router = express.Router();
var _ = require('underscore');
var async = require('async');

var char = require('../config/initdb').Character;
var bank = require('../config/initdb').BANKING;
var cred = require('../config/initdb').MEMB_CREDITS;

router.get('/topcredit', (req, res, next) => {
  var result = []
  cred.findAll().then(function(banks) {
    async.each(banks, function(acc, nextAcc) {
      acc.credits = parseInt(acc.credits);
      nextAcc();
    }, function() {

      var resu = _.sortBy(banks, 'credits');
      var rank = 1;
      for (var i = resu.length - 1; i >= 0; i--) {
        resu[i].dataValues.rank = rank;
        result.push(resu[i]);
        rank++;
      }
      res.send(result);
    })
  })
})

router.get('/toppk', function(req, res, next) {
  var charClass = req.query.charClass;
  var options = {};
  if (charClass && charClass != '') {
    options.Class = charClass
  }
  options.PkCount = { $gt: 0 }

  char.findAll({
    attributes: [
      'AccountID',
      'Name',
      'cLevel',
      'Class',
      'Strength',
      'Dexterity',
      'Vitality',
      'Energy',
      'Resets',
      'GrandResets',
      'PkCount'
    ],
    order: [
      ['PkCount', 'DESC']
    ],
    where: options
  }).then(chars => {
    for (var i = 0; i < chars.length; i++) {
      chars[i].dataValues.rank = i + 1
    }

    res.send(chars);
  }).catch(next)
})

router.get('/topclass', function(req, res, next) {
  var charClass = req.query.charClass;
  var options = {}
  if (charClass && charClass != '') {
    options.Class = charClass
  }

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
      'GrandResets'
    ],
    order: [
      ['GrandResets', 'DESC'],
      ['Resets', 'DESC']
    ],
    where: options
  }).then(function(chars) {
    for (var i = 0; i < chars.length; i++) {
      chars[i].dataValues.rank = i + 1
    }

    res.send(chars);
  }).catch(next)
})

router.get('/topmoney', function(req, res, next) {
  var result = []
  bank.findAll().then(function(banks) {
    async.each(banks, function(acc, nextAcc) {
      acc.zen_balance = parseInt(acc.zen_balance);
      nextAcc();
    }, function() {

      var resu = _.sortBy(banks, 'zen_balance');
      var rank = 1;
      for (var i = resu.length - 1; i >= 0; i--) {
        resu[i].dataValues.rank = rank;
        result.push(resu[i]);
        rank++
      }
      res.send(result);
    })
  })
})

module.exports = router;
