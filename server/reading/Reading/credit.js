var express = require('Express');
var router = express.Router();

var Cred = require('../config/initdb').MEMB_CREDITS;

router.get('/getcredit', (req, res, next) => {
  if (req.session.user) {
    Cred.findOne({
      where: {
        memb___id: req.session.user.memb___id
      }
    }).then(acc => {
      res.send(acc);
    })
  } else {
  	return res.sendStatus(403);
  }
})

module.exports = router
