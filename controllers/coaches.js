var express = require('express');
var router = express.Router();

var User = require('../models/user');

// index authors
router.get('/', function(req, res) {
    // res.send('authors will be here');
    User.find({})
        .exec(function(err, users) {
            if(err) console.log(err);

            console.log(users);
            res.send(users);
        });
});

module.exports = router;

router.get('/', function(req, res) {
    res.send('users will be here');
});

  console.log('users');
