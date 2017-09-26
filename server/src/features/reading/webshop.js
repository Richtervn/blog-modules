var express = require('express');
var router = express.Router();
var async = require('async');

var _ = require('underscore');
var fs = require('fs');
var multer = require('multer');

var char = require('../config/initdb').Character;
var Bank = require('../config/initdb').BANKING;
var Cred = require('../config/initdb').MEMB_CREDITS;
var MuApp = require('../config/MuApp');
var JSONreader = require('../config/JSONreader');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/img/WebshopPackages/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname)
  }
});

var upload = multer({
  storage: storage
}).single('file');

router.get('/get_package_categories', (req, res) => {
  var data = JSONreader.getAll('./data', 'PackageCategories');
  res.send(data);
})

router.put('/update_packages', (req, res)=>{
  JSONreader.update('./data', 'WebShop', req.body);
  res.sendStatus(200);
})

router.delete('/delete_package/:id', (req,res)=>{
  JSONreader.delete('./data', 'WebShop', req.params.id);
  res.sendStatus(200);
})

router.get('/get_packages', (req, res) => {
  var key = req.query.Name;
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);

  var data = JSONreader.getAll('./data', 'WebShop');
  var datas = [];
  var allpack = [];

  async.waterfall([

    (nextFunc) => {
      if (!req.query.Name) {
        var length = data.length
        if (to > length) to = length;
        for (var i = 0; i < to; i++) {
          allpack.push(data[i])
        }
        var result = {
          length: length,
          data: allpack
        }
        return res.send(result)
      } else {
        nextFunc();
      }
    },

    (nextFunc) => {
      var Names = _.pluck(data, 'Category')
      for (var i = 0; i < Names.length; i++) {
        if (Names[i] == key) {
          datas.push(data[i]);
        }
      }
      var length = datas.length;
      if (to > length) to = length;
      var datass = [];

      for (var i = from; i < to; i++) {
        datass.push(data[i]);
      }

      var result = {
        length: length,
        data: datass
      }

      nextFunc(null, result)
    }

  ], (err, result) => {
    res.send(result);
  })

})

router.post('/upload_package_image', function(req, res) {
  var id = JSONreader.makeId('./data', 'WebShop');

  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }

    fs.rename('./public/img/WebshopPackages/file', './public/img/WebshopPackages/' + id + '.jpg', function() {
      res.json({ error_code: 0, err_desc: null, WebShopId: id });
    })

  })
});

router.get('/buy_package', (req, res, next) => {
  var id = parseInt(req.query.PackageId);
  var errors = [];
  var response = {};

  console.log(req.query);

  async.waterfall([

    nextFunc => {
      async.parallel([
        callback => {
          char.findOne({
            attributes: ['Inventory'],
            where: {
              AccountID: req.query.memb___id,
              Name: req.query.Character
            }
          }).then(char => {
            var inv = MuApp.readInventory(char.dataValues.Inventory);
            callback(null, inv)
          })
        },
        callback => {
          var Package = JSONreader.getOne('./data', 'WebShop', 'Id', id);
          callback(null, Package);
        }
      ], (err, result) => {
        var Package = result[1];
        var inv = result[0];
        nextFunc(null, inv, Package);
      })
    },

    (inv, Package, nextFunc) => {
      if (Package.ZenPaid == true && req.query.ZenPaid == 'true') {
        Bank.findOne({
          where: {
            memb___id: req.query.memb___id
          }
        }).then(acc => {
          var newBalance = parseInt(acc.dataValues.zen_balance) - parseInt(Package.ZenPrice);
          if (newBalance < 0) {
            errors.push({
              'params': 'zen_balance',
              'msg': 'Your Bank Account do not have enough Zen',
              'value': 'undefined'
            })
            return res.send(errors)
          } else {
            Bank.update({
              zen_balance: newBalance
            }, {
              where: {
                memb___id: req.query.memb___id
              }
            })
            response.zen_balance = newBalance
            nextFunc(null, inv, Package)
          }
        })
      }
      if (Package.CrePaid == true && req.query.CrePaid == 'true') {
        Cred.findOne({
          where: {
            memb___id: req.query.memb___id
          }
        }).then(acc => {
          var newBalance = parseInt(acc.dataValues.credits) - parseInt(Package.CreditPrice);
          if (newBalance < 0) {
            errors.push({
              'params': 'credits',
              'msg': 'Your credit is not enough',
              'value': 'undefined'
            })
            return res.send(errors)
          } else {
            Cred.update({
              credits: newBalance
            }, {
              where: {
                memb___id: req.query.memb___id
              }
            })
            response.credits = newBalance
            nextFunc(null, inv, Package)
          }
        })
      }
    },

    (inv, Package, nextFunc) => {
      async.each(Package.Items, (Item, nextItem) => {

        if (Item.Category == 'Sets') {
          var Parts = [{ 'Helms': 'Helm' }, { 'Armors': 'Armor' }, { 'Pants': 'Pants' }, { 'Gloves': 'Gloves' }, { 'Boots': 'Boots' }];
          for (var i = 0; i < Parts.length; i++) {
            for (var key in Parts[i]) {
              Item.Category = key;
              var ItemArr = MuApp.makeItemValues(Item);
              Item.Slot = Parts[i][key];
              inv[Item.Slot] = ItemArr;
            }
          }
        } else {
          var ItemArr = MuApp.makeItemValues(Item);
          inv[Item.Slot] = ItemArr;
          console.log(ItemArr);
          console.log(inv);
        }

        nextItem();

      }, () => {
        nextFunc(null, inv, Package);
      })
    }

  ], (err, inv) => {
    var Inventory = MuApp.makeInventory(inv);
    char.update({
      Inventory: Inventory
    }, {
      where: {
        AccountID: req.query.memb___id,
        Name: req.query.Character
      }
    }).then(() => {
      response.memb___id = req.query.memb___id;
      console.log(response)
      res.send(response);
    })
  })
})





router.get('/viewInventory', (req, res, next) => {
  char.findOne({
    attributes: [
      'Inventory'
    ],
    where: {
      AccountID: 'Richter',
      Name: 'TestDK'
    }
  }).then(char => {
    var data = MuApp.readInventory(char.dataValues.Inventory);
    res.send(data);
  }).catch(next);
})

function fillInventory(str) {
  for (var i = str.length; i < 760; i++) {
    str.push(255);
  }
  return str;
}

router.get('/test', (req, res) => {
  var item = {
    Index: 0,
    ItemLevel: 15,
    Category: 'Swords',
    Options: 7,
    Luck: true,
    ExcOpt1: true,
    ExcOpt2: true,
    ExcOpt3: true,
    ExcOpt4: true,
    ExcOpt5: true,
    ExcOpt6: true
  }

  var arr = MuApp.makeItemValues(item);
  res.send(arr);
})

router.get('/makeinv', function(req, res, next) {
  var item = fillInventory(test);
  char.update({
    Inventory: item
  }, {
    where: {
      AccountID: 'Richter',
      Name: 'Tester'
    }
  }).then(() => {
    res.sendStatus(200);
  })
})

router.get('/inv', function(req, res, next) {
  char.findOne({
    attributes: [
      'Inventory'
    ],
    where: {
      AccountID: 'Richter',
      Name: 'Tester'
    }
  }).then(char => {
    res.send(char);
  }).catch(next);
})

router.get('/inventory', function(req, res, next) {
  char.findOne({
    attributes: [
      'Inventory'
    ],
    where: {
      AccountID: 'Richter',
      Name: 'Tester'
    }
  }).then(function(chars) {
    var Inventory = readInventory(chars.Inventory);
    console.log(Inventory);
    chars.dataValues.Test = Inventory;
    // initInventory(test);
    var test = makeInventory(Inventory);
    chars.dataValues.Test2 = test;
    res.send(chars);

    // var inv = chars.Inventory.toJSON();
    // var inv = chars.Inventory;
    // console.log(inv);
    // console.log(typeof inv)
    // var test = Buffer.from(inv);
    // char.update({
    //   Inventory: test
    // }, {
    //   where: {
    //     AccountID: 'Richter',
    //     Name: 'MG9701'
    //   }
    // }).then(function(chrs) {
    //   console.log('success');
    //   res.send(chrs);
    // })

  }).catch(next)
})

router.get('/clearinv', function(req, res, next) {
  char.update({
    Inventory: clearinv
  }, {
    where: {
      AccountID: 'Richter',
      Name: 'Tester'
    }
  }).then(function(chars) {
    console.log(clearinv.length)
    res.send(chars)
  })
})

module.exports = router
