var express = require('express');
var router = express.Router();

// require models
// var User = require('../models/user');
// var Item = require('../models/item');
// var ProjectIdea = require('./models/project_idea');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coach in Motion'});
});

module.exports = router;
