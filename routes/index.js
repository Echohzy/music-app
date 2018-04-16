var express = require('express');
var router = express.Router();

router.get(/[^\s]*/, function(req, res, next) {
  res.render('index', { title: 'Music App' });
});

module.exports = router;
