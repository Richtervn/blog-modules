var async = require('async');
var _ = require('underscore');
var JSONreader = require('./JSONreader');

var MuApp = {

  getSmallDateTime: function() {
    var date = new Date()
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')
    return date;
  },

  makeSmallDateTime: function(day) {
    var date = new Date(day)
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')
    return date;
  },

  revertDataDate: function (date) {
    var time = new Date(date)
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')
    var yyyy = time.substr(0,4);
    var mm = time.substr(5,2);
    var d = parseInt(time.substr(8,2));
    var dd = d + 1;
    var day = mm + '-' + dd + '-' + yyyy;
    return day;
  },

  addSmallDays: function(curSmallDays, daysCount) {
    var days = parseInt(daysCount);
    var curdate = curSmallDays.toString();
  },

  makeRandom: function() {
    var rd = Math.floor(Math.random() * 255)
    return rd;
  },

  makeItemValues: function(Item) {
    var Categories = JSONreader.getAll('./data', 'Categories');
    var Indexes = {};
    for (var i = 0; i < Categories.length; i++) {
      Indexes[Categories[i].Name] = Categories[i].Id;
    }

    var itemArr = []

    var baseIndex = (Indexes[Item.Category] % 8) * 32;
    var firstValue = parseInt(baseIndex) + parseInt(Item.Index);

    itemArr.push(firstValue);

    if ((Indexes[Item.Category] / 8) < 1) {
      var eighthValue = 0
    } else {
      var eighthValue = 128
    }

    var secondValue = 0;
    secondValue = Item.ItemLevel * 8;
    if (Item.Skill) {
      secondValue += 128;
    }
    if (Item.Luck) {
      secondValue += 4;
    }
    if (Item.ExcOpt1) {
      eighthValue += 32;
    }
    if (Item.ExcOpt2) {
      eighthValue += 16;
    }
    if (Item.ExcOpt3) {
      eighthValue += 8;
    }
    if (Item.ExcOpt4) {
      eighthValue += 4;
    }
    if (Item.ExcOpt5) {
      eighthValue += 2;
    }
    if (Item.ExcOpt6) {
      eighthValue += 1;
    }
    if (Item.Options) {
      if (Item.Options < 4) {
        secondValue += Item.Options * 1;
      }
      if (Item.Options > 4) {
        secondValue += (Item.Options - 4) * 1;
        eighthValue += 64;
      }
    }

    itemArr.push(secondValue);
    itemArr.push(255);
    itemArr.push(0);
    itemArr.push(0);
    itemArr.push(0);
    itemArr.push(0);
    itemArr.push(eighthValue);
    itemArr.push(MuApp.makeRandom());
    itemArr.push(MuApp.makeRandom());

    return itemArr;
  },

  readInventory: function(inv) {

    var InvData = inv.toJSON();
    var Inventory = {};

    Inventory.RightHand = InvData.data.slice(0, 10);
    Inventory.LeftHand = InvData.data.slice(10, 20);
    Inventory.Helm = InvData.data.slice(20, 30);
    Inventory.Armor = InvData.data.slice(30, 40);
    Inventory.Pants = InvData.data.slice(40, 50);
    Inventory.Gloves = InvData.data.slice(50, 60);
    Inventory.Boots = InvData.data.slice(60, 70);
    Inventory.Wing = InvData.data.slice(70, 80);
    Inventory.Pet = InvData.data.slice(80, 90);
    Inventory.Pendant = InvData.data.slice(90, 100);
    Inventory.RightRing = InvData.data.slice(100, 110);
    Inventory.LeftRing = InvData.data.slice(110, 120);

    for (var i = 120, index = 0; i < 760; i += 10, index++) {
      var x = Math.floor(index / 8) + 1
      var y = (index % 8) + 1
      var keyname = 'Inventory' + x.toString() + y.toString();
      Inventory[keyname] = InvData.data.slice(i, i + 10);
    }

    return Inventory;
  },

  makeInventory: function(inv) {
    var Inventory = [];
    for (key in inv) {
      Inventory = Inventory.concat(inv[key])
    }

    return Inventory
  }
}

module.exports = MuApp
