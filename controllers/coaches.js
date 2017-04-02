var express = require('express');
var router = express.Router();

var Coach = require('../models/coach');
// require models
// var Item = require('../models/item');
// var ProjectIdea = require('./models/project_idea');
router.post('/login', function(req, res) {
  Coach.find({ username: req.body.username },
    // console.log("Check");
    function(err, coaches) {
      //  did i get one result back checking for one user

      if (coaches.length === 1) {
        //username exists, now check password
        var coach = coaches[0];

        console.log(coach.password);
        console.log(req.body.password);

        if(coach.password === req.body.password) {
          res.render('client/index', {
            client: coach.clients,
            id: coach._id
          });
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

// index authors
router.get('/', function(req, res, next) {
  res.render('coaches', { title: ''});
});


router.post('/', function(req, res){
  var newCoach = new Coach({
    username: req.body.username,
    password: req.body.password
  });
console.log(newCoach);
  newCoach.save(function(err, coach) {
    newCoachId = newCoach.id;
    if (err) {console.log(err)}
    console.log(coach);
    res.redirect('/coaches/' + newCoachId + '/clients');
  })
})
// Show individual Coaches
router.get('/:id', function(req, res) {
  Coach.findById(req.params.id)
    .exec(function(err, coach) {
      if(err) {console.log(err)};
      res.render('coaches/show', {
        coachId: req.params.id
      });
    });
});

// USE THIS IF NEEDED
// router.post('/', function(req, res, next) {
//   CoachSchema.find({ username: req.body.username },
//     // console.log("Check");
//      function(err, suc) {
//       //  did i get one result back checking for one user
//       console.log(suc);
//     if (suc.length === 1) {
//       //username exists, now check password
//       var user = suc[0];
//
//       if(user.password === req.body.password[0]) {
//         res.send('/coaches');
//       } else {
//         res.send('Wrong Password Try Again');
//       }
//
//       //check and see if user password is equal to password that person tried to log in with
//
//     } else {
//       //username does not exists
//       res.send('That is not a valid username.');
//     }
// });
// });

module.exports = router;

// router.get('/', function(req, res) {
//     res.send('users will be here');
// });
//
//   console.log('users');
// router.get('/', function(req, res) {
//     // res.send('authors will be here');
//     User.find({})
//         .exec(function(err, users) {
//             if(err) console.log(err);
//
//             console.log(users);
//             res.send(users);
//         });
// });
