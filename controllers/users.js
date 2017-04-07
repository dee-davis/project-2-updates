// We are not referencing this
var express = require('express');
var router = express.Router();
var CoachSchema = require('../db/schema.js').Coach;
// require models
// var User = require('../models/user');
// var Item = require('../models/item');
// var ProjectIdea = require('./models/project_idea');
/* GET users listing. */
router.post('/', function(req, res, next) {
  CoachSchema.find({ username: req.body.username },
    // console.log("Check");
     function(err, suc) {
      //  did i get one result back checking for one user
      console.log(suc);
      if (suc.length === 1) {
      //username exists, now check password
      var user = suc[0];

      if(user.password === req.body.password[0]) {
        res.send('/coaches');
      } else {
        res.send('Wrong Password Try Again');
      }

      //check and see if user password is equal to password that person tried to log in with

    } else {
      //username does not exists
      res.send('That is not a valid username.');
    }
});

});
module.exports = router;
