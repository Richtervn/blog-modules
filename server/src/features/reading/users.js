var express = require('Express');
var router = express.Router();
var randomString = require('randomstring');
var async = require('async');
var util = require('util');
var fs = require('fs');
var multer = require('multer');

var Membinfo = require('../config/initdb').MEMB_INFO;
var bank = require('../config/initdb').BANKING;
var Credit = require('../config/initdb').MEMB_CREDITS;
var ViCurInfo = require('../config/initdb').VI_CURR_INFO;

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function getSmallDateTime() {
  var date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
  return date;
}

function makesno_numb(birthday) {
  var data = new Date(birthday)
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')

  var yyyy = data.substring(0, 4);
  var mm = data.substring(5, 7);
  var dd = data.substring(8, 10);

  var sno__numb = yyyy + mm + dd;

  return sno__numb;
}

function readsno_numb(sno__numb) {
  var yyyy = sno__numb.substring(0, 4);
  var mm = sno__numb.substring(4, 6);
  var dd = sno__numb.substring(6, 8);

  var birthday = yyyy + '-' + mm + '-' + dd

  return birthday;
}

function getDefaultAvatar(user) {
  var id = parseInt(user.dataValues.memb_guid);
  var data = fs.readFileSync('./public/img/Users/df.jpg');
  fs.writeFile('./public/img/Users/' + id + '.jpg', data, function(err) {
    if (err) throw err;
  });
}

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/img/Users/')
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname)
  }
});
var upload = multer({
  storage: storage
}).single('file');

router.post('/register', function(req, res, next) {

  var name = req.body.Name;
  var mail = req.body.Mail;
  var username = req.body.Username;
  var password = req.body.Password;
  var password2 = req.body.Password2;

  req.checkBody('Name', 'Name is required').notEmpty();
  req.checkBody('Mail', 'Email is required').notEmpty();
  req.checkBody('Mail', 'Email is incorrect').isEmail();
  req.checkBody('Username', 'Username is required').notEmpty();
  req.checkBody('Password', "Password is required").notEmpty();
  req.checkBody('Password2', "Password does not match").equals(req.body.Password);
  req.checkBody("Name", "Name can not contain special characters").isAlphanumeric();
  req.checkBody("Username", "Username can not contain special characters").isAlphanumeric();
  req.checkBody("Password", "Password can not contain special characters").isAlphanumeric();

  var errors = req.validationErrors() || [];

  if (!req.body.Username || req.body.Username.length < 6) {
    errors.push({
      param: 'Username',
      msg: 'Username must be longer than 6 character',
      value: 'undefined'
    });
  }

  if (!req.body.Password || req.body.Password.length < 6) {
    errors.push({
      param: 'Password',
      msg: 'Password must be longer than 6 character',
      value: 'undefined'
    });
  }

  async.waterfall([

    function(nextFunc) {

      async.parallel([
          (callback) => {
            Membinfo.findOne({
              where: {
                memb___id: req.body.Username
              }
            }).then(tmp => {
              if (tmp) {
                errors.push({
                  param: 'Username',
                  msg: 'Username has already been used',
                  value: 'undefined'
                });
              }
            }).catch(err => {
              callback(err)
            }).done(callback)
          },
          (callback) => {
            Membinfo.findOne({
              where: {
                mail_addr: req.body.Mail
              }
            }).then(tmp => {
              if (tmp) {
                errors.push({
                  param: 'Password',
                  msg: 'Email has already been used',
                  value: 'undefined'
                });
              }
            }).catch(err => {
              callback(err)
            }).done(callback)
          }
        ],

        (err, result) => {
          if (err) return nextFunc(err);
          nextFunc();
        })
    },

    function(nextFunc) {
      if (errors.length > 0) {
        return res.send(errors);
      } else {
        async.parallel([

          (callback) => {
            var appl = getSmallDateTime();
            Membinfo.create({
              memb___id: req.body.Username,
              memb__pwd: req.body.Password,
              memb_name: req.body.Name,
              mail_addr: req.body.Mail,
              sno__numb: makesno_numb(req.body.Birthday),
              appl_days: appl,
              bloc_code: '0',
              ctl1_code: '0'
            }).then(mem => {
              getDefaultAvatar(mem);
              ViCurInfo.create({
                ends_days: '2005',
                chek_code: '1',
                used_time: 1234,
                memb___id: mem.memb___id,
                memb_name: mem.memb_name,
                memb_guid: mem.memb_guid,
                sno__numb: mem.sno__numb,
                Bill_Section: 6,
                Bill_Value: 3,
                Bill_Hour: 6,
                Surplus_Point: 6,
                Increase_Days: 0
              })
              callback();
            })
          },

          (callback) => {
            bank.create({
              memb___id: req.body.Username,
              zen_balance: '0',
              loan_money: 0
            })
            callback();
          },

          (callback) => {
            Credit.create({
              memb___id: req.body.Username,
              credits: 0
            })
            callback();
          }

        ], (err, result) => {
          if (err) return nextFunc(err);
          nextFunc();
        })
      }
    }
  ], (err) => {
    if(err) return next(err);
    res.sendStatus(200);
  })
});

router.post('/login', function(req, res, next) {
  var sess = req.session;
  var logerr = [];

  Membinfo.findOne({
    where: {
      memb___id: req.body.Username
    }
  }).then(function(user) {

    if (!user) {
      logerr.push({
        param: 'Username',
        msg: 'Username is not valid',
        value: 'undefined'
      })
      return res.send(logerr);
    } else {
      if (user.memb__pwd != req.body.Password) {
        logerr.push({
          param: 'Password',
          msg: 'Password is incorrect',
          value: 'undefined'
        })
        return res.send(logerr);
      } else {
        sess.user = user;
        res.send(user);
      }
    }
  }).catch(next);

});

router.get('/getCurrentUser', function(req, res, next) {
  var sess = req.session;
  res.json(sess.user);
});

router.post('/logout', function(req, res, next) {
  var sess = req.session;
  sess.destroy(function(err) {
    if (err)
      return next(err);

    res.sendStatus(200);
  })
});

router.post('/upload', function(req, res, next) {
  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    fs.rename('./public/img/Users/file', './public/img/Users/' + req.session.user.memb_guid + '.jpg', function() {
      res.json({ error_code: 0, err_desc: null });
    })
  })
});

router.put('/upinfo', function(req, res, next) {
  Membinfo.findOne({
    where: {
      memb_guid: req.body.memb_guid
    }
  }).then(function(mem) {
    var modi = getSmallDateTime();
    mem.update({
      post_code: req.body.post_code,
      addr_info: req.body.addr_info,
      addr_deta: req.body.addr_deta,
      tel__numb: req.body.tel__numb,
      phon_numb: req.body.phon_numb,
      fpas_ques: req.body.fpas_ques,
      fpas_answ: req.body.fpas_answ,
      job__code: req.body.job__code,
      modi_days: modi
    }).then(function(memup) {
      res.send(memup);
    })
  })
})

router.get('/lost_password', (req, res, next) => {
  var memb___id = req.query.memb___id;
  var email = req.query.email;
  var sec_ques = req.query.sec_ques;
  var sec_ans = req.query.sec_ans;
  var errors = [];

  Membinfo.findOne({
    where: {
      memb___id: memb___id,
      mail_addr: email,
      fpas_ques: sec_ques,
      fpas_answ: sec_ans
    }
  }).then(mem => {
    if(!mem){
      errors.push({
        'params': 'undefined',
        'msg': 'Your Infomation is not correct! Please contact administrator',
        'value': 'undefined'
      })
      res.send(errors)
    } else {
      res.send(mem.memb__pwd);
    }
  }).catch(next)
})

router.put('/change_password', (req, res, next) => {

  req.checkBody('memb__pwd', 'Enter your current password').notEmpty();
  req.checkBody('new_pass', "New Password can not be blank").notEmpty();
  req.checkBody('new_pass', 'New Password can not contain speacial characters').isAlphanumeric();
  req.checkBody('new_pass2', 'Repeat Password can not contain speacial characters').isAlphanumeric();
  req.checkBody('new_pass2', 'Password does not match').equals(req.body.new_pass);

  var errors = req.validationErrors() || [];

  if (req.body.new_pass.length < 6 || req.body.new_pass2.length < 6) {
    errors.push({
      params: 'NewPassword',
      msg: 'New Password must be longer than 6 characters',
      value: 'undefined'
    })
  }

  if (errors.length > 0) {
    return res.send(errors)
  } else {

    async.waterfall([
      (nextFunc) => {
        Membinfo.findOne({
          where: {
            memb___id: req.body.memb___id
          }
        }).then(mem => {
          if (mem.memb__pwd !== req.body.memb__pwd) {
            errors.push({
              params: 'OldPassword',
              msg: 'Your current password is wrong',
              value: 'undefined'
            })
            return res.send(errors);
          } else {
            nextFunc();
          }
        })
      },

      (nextFunc) => {
        Membinfo.update({
          memb__pwd: req.body.new_pass
        }, {
          where: {
            memb___id: req.body.memb___id
          }
        }).then(nextFunc);
      }

    ], () => {
      res.sendStatus(200);
    })
  }
})

module.exports = router;
