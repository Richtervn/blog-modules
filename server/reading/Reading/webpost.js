var express = require('Express');
var router = express.Router();
var async = require('async');
var fs = require('fs');
var _ = require('underscore');
var multer = require('multer');

function getPostId() {
  var map = fs.readFileSync('./data/WebMap.json');
  var data = JSON.parse(map);
  if (data.length == 0) {
    var webPostId = 1;
  } else {
    var webPostId = data[data.length - 1].Id + 1;
  }
  return webPostId;
}

function getPostDb() {
  var map = fs.readFileSync('./data/WebMap.json');
  var data = JSON.parse(map);
  return data;
}

function makeShortContent(postId) {
  var datas = [];

  var data = fs.readFileSync('./public/Webpost/' + postId + '.html').toString();
  data = data.replace(/<\/?[^>]+(>|$)/g, '').split('\n');

  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].trim()
    if (data[i].length > 1) {
      datas.push(data[i]);
    }
  }

  var str = '';
  for (var i = 0; i < datas.length; i++) {
    str = str.concat(' ', datas[i]);
  }

  return str;
}

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/img/Webposts/')
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname)
  }
});

var upload = multer({
  storage: storage
}).single('file');

router.post('/upload_post_image', function(req, res) {
  var id = getPostId();

  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }

    fs.rename('./public/img/Webposts/file', './public/img/Webposts/' + id + '.jpg', function() {
      res.json({ error_code: 0, err_desc: null, webPostId: id });
    })

  })
});

router.post('/upload_post_content', function(req, res) {
  var id = getPostId();
  var postContent = req.body.postContent;

  fs.writeFileSync('./public/Webpost/' + id + '.html', postContent)
  var data = {
    Id: id,
    Title: req.body.postTitle,
    Category: req.body.postCategory
  }

  var webdb = getPostDb();
  webdb.push(data);
  var db = JSON.stringify(webdb);

  fs.writeFileSync('./data/WebMap.json', db);
  res.send(data);

})

router.get('/get_post', (req, res) => {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  var webdb = getPostDb();
  var data = [];
  var len = webdb.length;

  if (to > len) {
    to = len;
  }

  for (var i = from; i < to; i++) {
    var content = fs.readFileSync('./public/Webpost/' + webdb[i].Id + '.html').toString();
    webdb[i].content = content;
    data.push(webdb[i]);
  }

  var result = {
    'length': len,
    'data': data
  }

  res.send(result);
})

router.get('/get_short_content', (req, res) => {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  var webdb = getPostDb();
  var data = [];
  var len = webdb.length;

  if(to > len){
    to = len;
  }

  for (var i = from; i < to; i++) {
    var short_content = makeShortContent(webdb[i].Id);
    webdb[i].short_content = short_content.substring(0, 100);
    data.push(webdb[i])
  }

  var result = {
    'length': len,
    'data': data
  }

  res.send(result);
})

router.get('/get_post_by_id/:id', (req, res) => {
  var id = parseInt(req.params.id) - 1;
  var webdb = getPostDb();
  var data = webdb[id];
  var content = fs.readFileSync('./public/Webpost/' + req.params.id + '.html').toString();
  data.content = content;

  res.send(data);
})

router.get('/get_post_by_category', (req, res) => {
  var category = req.query.category;
  var webdb = getPostDb();
  var from = req.query.from;
  var to = req.query.to;
  var data = [];
  var result = [];

  for (var i = 0; i < webdb.length; i++) {
    if (webdb[i].Category === category) {
      data.push(webdb[i]);
    }
  }

  if (to > data.length) {
    to = data.length;
  }

  for (var j = from; j < to; j++) {
    result.push(data[j]);
  }

  for (var k = 0; k < result.length; k++) {
    var content = fs.readFileSync('./public/Webpost/' + result[k].Id + '.html').toString();
    result[k].content = content;
  }

  var results = {
    length: data.length,
    data: result
  }

  res.send(results);

})

router.get('/delete_post/:id', (req, res) => {
  var webdb = getPostDb();
  var id = parseInt(req.params.id);

  var idlist = _.pluck(webdb, 'Id');
  var index = _.indexOf(idlist, id, true);

  webdb.splice(index, 1);
  var db = JSON.stringify(webdb);

  fs.writeFileSync('./data/WebMap.json', db);
  fs.unlinkSync('./public/Webpost/' + id + '.html');
  fs.unlinkSync('./public/img/Webposts/' + id + '.jpg');

  res.sendStatus(200);
})

router.post('/edit_post_content', (req, res) => {
  var webdb = getPostDb();
  var idlist = _.pluck(webdb, 'Id');
  var index = _.indexOf(idlist, req.body.Id, true);
  webdb[index].Title = req.body.Title;
  webdb[index].Category = req.body.Category;
  fs.writeFileSync('./data/Webpost/' + req.body.Id + '.html');
  res.sendStatus(200);
})

router.post('/edit_post_image/:id', (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    fs.rename('./public/img/Webposts/file', './public/img/Webposts/' + req.params.id + '.jpg', function() {
      res.json({ error_code: 0, err_desc: null, webPostId: id });
    })
  })
})

module.exports = router;
