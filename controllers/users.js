var express = require('express');
var router = express.Router();
var UserSchema = require('../db/schema.js').User;
/* GET users listing. */
router.post('/', function(req, res, next) {
  UserSchema.find({ username: req.body.username }, function(err, suc) {
    if (suc.length === 1) {
      //username exists, now check password
      var user = suc[1];
      //check and see if user password is equal to password that person tried to log in with
      
    } else {
      //username does not exists
      res.send('That is not a valid username.');
    }
});

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

// res.send(req.body.username + req.body.password);

// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;
