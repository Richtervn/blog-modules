var express = require('Express');
var router = express.Router();
var util = require('util');

var Char = require('../config/initdb').Character;
var Membinfo = require('../config/initdb').MEMB_INFO;
var Bank = require('../config/initdb').BANKING;
var Credit = require('../config/initdb').MEMB_CREDITS;

var MuApp = require('../config/MuApp');

router.get('/search_account', function(req, res, next) {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  var limit = to - from;
  var name = req.query.name;
  var membID = req.query.membID;
  var telNumb = req.query.telNumb;
  var phonNumb = req.query.phonNumb;
  var mail = req.query.mail;
  var applDay = req.query.applDay;
  var modiDay = req.query.modiDay;
  var blocCode = req.query.blocCode;
  var ctlCode = req.query.ctl1Code;

  var options = {};

  if (ctlCode) {
    options.ctl1_code = ctlCode;
  }

  if (name) {
    options.memb_name = { $like: '%' + name + '%' };
  }

  if (membID) {
    options.memb___id = { $like: '%' + membID + '%' };
  }

  if (telNumb) {
    options.tel__numb = telNumb;
  }

  if (phonNumb) {
    options.phon_numb = phonNumb;
  }

  if (mail) {
    options.mail_addr = { $like: '%' + mail + '%' };
  }

  if (blocCode) {
    options.bloc_code = blocCode
  }

  if (applDay) {
    options.appl_days = MuApp.getSmallDateTime(applDay);
  }

  if (modiDay) {
    options.modi_days = MuApp.getSmallDateTime(modiDay);
  }

  Membinfo.count({
    where: options
  }).then(function(membs) {
    Membinfo.findAll({
      where: options,
      offset: from,
      limit: limit
    }).then(function(membsdata) {
      var data = {
        length: membs,
        data: membsdata
      }
      res.send(data)
    }).catch(next);
  })
})

router.get('/search_char', function(req, res, next) {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  var limit = to - from;
  var name = req.query.name;
  var accID = req.query.accID;
  var charcl = req.query.charcl;

  var options = {};

  if (name) {
    options.Name = name
  }

  if (accID) {
    options.AccountID = accID
  }

  if (charcl) {
    options.Class = charcl
  }

  Char.count({
    where: options
  }).then(function(chars) {
    Char.findAll({
      attributes: [
        'AccountID',
        'Name',
        'cLevel',
        'LevelUpPoint',
        'Class',
        'Experience',
        'Strength',
        'Dexterity',
        'Vitality',
        'Energy',
        'Money',
        'MapNumber',
        'PkCount',
        'PkLevel',
        'PkTime',
        'Resets',
        'GrandResets',
        'IsMarried',
        'MarryName',
        'SkyEventWins',
        'IsVip',
        'VipExpirationTime'
      ],
      where: options,
      offset: from,
      limit: limit
    }).then(function(charsdata) {
      var data = {
        length: chars,
        data: charsdata
      }
      res.send(data);
    }).catch(next);
  })
})

router.get('/search_bank', function(req, res, next) {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  limit = to - from;

  var options = {};

  if (req.query.accID) {
    options.memb___id = { $like: '%' + req.query.accID + '%' }
  }

  Bank.count({
    where: options
  }).then(function(accs) {
    Bank.findAll({
      where: options,
      offset: from,
      limit: limit
    }).then(function(accdata) {
      var data = {
        length: accs,
        data: accdata
      }
      res.send(data);
    }).catch(next);
  })
})

router.get('/search_credit', function(req, res, next) {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  limit = to - from;

  var options = {};

  if (req.query.accID) {
    options.memb___id = { $like: '%' + req.query.accID + '%' }
  }

  Credit.count({
    where: options
  }).then(accs => {
    Credit.findAll({
      where: options,
      offset: from,
      limit: limit
    }).then(accdata => {
      var data = {
        length: accs,
        data: accdata
      }
      res.send(data)
    }).catch(next);
  })
})

router.put('/edit_bank/:accid', function(req, res, next) {
  Bank.update(req.body, {
    where: {
      memb___id: req.params.accid
    }
  }).then(acc => {
    res.sendStatus(200);
  }).catch(next);
})

router.put('/edit_credit/:accid', function(req, res, next) {
  Credit.update(req.body, {
    where: {
      memb___id: req.params.accid
    }
  }).then(acc => {
    res.sendStatus(200);
  })
})

router.put('/edit_character/:accid', function(req, res, next) {

  var cLevel = parseInt(req.body.cLevel);
  var Money = parseInt(req.body.Money);

  req.checkBody('Name', "Name can not contain special characters").isAlphanumeric();

  var errors = req.validationErrors() || [];

  if (cLevel) {
    if (cLevel > 350) {
      errors.push({
        params: 'cLevel',
        msg: 'Character level can not be higher than 350',
        value: 'undefined'
      })
    }

    if (cLevel < 1) {
      errors.push({
        params: 'cLevel',
        msg: 'Character minimum level is 1',
        value: 'undefined'
      })
    }
  }

  if (req.body.Name && req.body.Name.length < 6) {
    errors.push({
      params: 'Name',
      msg: 'Name must be longer than 6 characters',
      value: 'undefined'
    })
  }

  if (Money) {
    if (Money > 2000000000) {
      errors.push({
        params: 'Money',
        msg: 'Maximum Zen allowed is 2,000,000,000',
        value: 'undefined'
      })
    }

    if (Money < 0) {
      errors.push({
        params: 'Money',
        msg: 'Mimimum Zen allowed is 0',
        value: 'undefined'
      })
    }

    if (errors.length > 0) {
      return res.send(errors)
    } else {
      Char.update(req.body, {
        where: {
          AccountID: req.params.accid,
          Name: req.body.Name
        }
      }).then(char => {
        res.sendStatus(200);
      }).catch(next)
    }
  }
})

router.put('/edit_account/:accid', function(req, res, next) {
  console.log(req.body);

  req.checkBody('memb__pwd', "Password can not contain special characters").isAlphanumeric();
  req.checkBody('memb_name', "Username can not contain special characters").isAlphanumeric();
  req.checkBody('mail_addr', "Email is incorrect").isEmail();

  var appl_days = req.body.appl_days;
  var modi_days = req.body.modi_days;
  var out__days = req.body.out__days;
  var true_days = req.body.true_days;

  console.log(appl_days);

  if (appl_days) {
    appl_days = MuApp.revertDataDate(appl_days)
  }
  if (modi_days) {
    modi_days = MuApp.revertDataDate(modi_days)
  }
  if (out__days) {
    out__days = MuApp.revertDataDate(out__days)
  }
  if (true_days) {
    true_days = MuApp.revertDataDate(true_days)
  }
  console.log(appl_days);

  var errors = req.validationErrors() || [];

  if (req.body.memb_name && req.body.memb_name.length < 6) {
    errors.push({
      params: 'Name',
      msg: 'Name must be longer than 6 characters',
      value: 'undefined'
    });
  }

  if (req.body.memb__pwd && req.body.memb__pwd.length < 6) {
    errors.push({
      params: 'Password',
      msg: 'Password must be longer than 6 characters',
      value: 'undefined'
    })
  }

  if (errors.length > 0) {
    return res.send(errors);
  } else {
    Membinfo.update({
      'memb__pwd': req.body.memb__pwd,
      'memb_name': req.body.memb_name,
      'phon_numb': req.body.phon_numb,
      'tel__numb': req.body.tel__numb,
      'post_code': req.body.post_code,
      'job__code': req.body.job__code,
      'bloc_code': req.body.bloc_code,
      'ctl1_code': req.body.ctl1_code,
      'addr_info': req.body.addr_info,
      'addr_deta': req.body.addr_deta,
      'mail_addr': req.body.mail_addr,
      'fpas_ques': req.body.fpas_ques,
      'fpas_answ': req.body.fpas_answ,
      'appl_days': appl_days,
      'modi_days': modi_days,
      'out__days': out__days,
      'true_days': true_days
    }, {
      where: {
        memb___id: req.params.accid
      }
    }).then(memb => {
      res.sendStatus(200);
    }).catch(next);
  }
})

module.exports = router;
