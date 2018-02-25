var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHINE - Sahyadri Hub of Innovation and Enterpreneurship' });
});


module.exports = router;
