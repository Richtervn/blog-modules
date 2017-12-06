var express = require('Express');
var router = express.Router();
var _ = require('underscore');

var fs = require('fs');
var db = require('../config/JSONreader');

router.get('/admin_get_categories', (req, res) => {
  var categories = db.getAll('./data', 'PackageCategories');
  res.send(categories);
})

router.delete('/admin_delete_category/:id', (req, res) => {
  var id = req.params.id;
  db.delete('./data', 'PackageCategories');
  res.sendStatus(200)
})

router.post('/admin_add_category', (req, res) => {
  var category = db.add('./data', 'PackageCategories', req.body);
  res.send(category);
})

router.get('/admin_get_items', (req, res) => {
  var category = req.query.category;
  var data = db.getAll('./data', category);
  res.send(data);
})

router.post('/admin_add_package', (req, res) => {
  var package = db.add('./data', 'WebShop', req.body);
  res.send(package);
})

router.get('/admin_get_packages', (req,res) => {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  var category = req.query.category;
  var packages = db.getAll('./data', 'WebShop');

  if(category){
    var data = [];
    var datas = [];
    for (var i = 0; i < packages.length; i++) {
      if(packages[i].Category == category){
        data.push(packages[i])
      }
    }
    var len = data.length;
    if(to > len) to = len;
    for(var i = from; i < to; i++){
      datas.push(data[i]);
    }
    var result = {
      length: len,
      data: datas
    }
  } else {
    var data = [];
    var len = packages.length;
    if(to > len) to = len;
    for(var i = from; i < to; i++){
      data.push(packages[i]);
    }
    var result = {
      length: len,
      data: data
    }
  }
  res.send(result)
})

module.exports = router;
