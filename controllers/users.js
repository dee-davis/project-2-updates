var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
// var express = require('express');
// var router = express.Router();
// // added
// var User = require('../models/user.js');
// var authHelpers = require('../helpers/auth.js')
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// // added
// router.post('/', authHelpers.createSecure, function(req, res){
// });
//
// module.exports = router;



// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;
