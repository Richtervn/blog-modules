var express = require('express');
var router = express.Router();
var fs = require('fs');
var util = require('util');

router.get('/getMList', function(req, res, next) {
  var monsters = [];
  var data = fs.readFileSync("./Data/Monster.txt")
    .toString()
    .split('\n')
    .forEach(function(line) {

      var att = line.split('\t')

      var mon____id = parseInt(att[0]);
      if (util.isString(att[2])) {
      	att[2] = att[2].replace(/\"/g,'');
        var mon__name = att[2];
      }

      if (util.isNumber(mon____id)) {
        var monster = {
          'mon____id': mon____id,
          'mon__name': mon__name
        }
        if (isNaN(monster.mon____id)) {
          monster.destroy;
        } else {
          monsters.push(monster)
        }
      }

    })

  res.send(monsters);
})

module.exports = router;
