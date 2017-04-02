var express = require('express');
var router = express.Router({mergeParams: true});
var Coach = require('../models/coach');
var Client = require('../models/client');
var mongoose = require("mongoose");
// added
// router.get('/:id/edit', function(req,res) {
//     Client.findById(req.params.id)
//     .exec(function(err, client) {
//         if (err) { console.log(err); }
//
//         res.render('clients/edit', {
//             client: client
//         });
//     });
// });
// need to post
router.post('/', function(req, res) {
    var client = new Client({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        notes: req.body.notes
    });

    // anonymous function
    client.save(function(err, client){
      if (err) { console.log(err); }
      console.log(client);
    });

    Coach.findOneAndUpdate(
      { _id: req.params.id},
      { $push: { clients: client  } },
      { new: true },
      function(err, coach) {
        if (err) { console.log(err); }
        console.log(coach);
        res.render('client/index', {
          client: coach.clients,
          id: req.params.id
        });
      }
    );
});

// Creating a Delete Route and Request lines 49-63
// router.delete('/id', function(req, res) {
// 	coach.clients.splice(req.params.id, 1); // remove the item from the array
//   res.redirect('/clients');  // redirect back to the index route
//   });

  router.get('/:id/edit', function(req,res) {
    Coach.findById(req.params.id)
      .exec(function(err, coach) {
        if (err) { console.log(err); }

    res.render('coaches/edit', {
      coach: coach.clients
    });
  });
});

router.get('/', function(req, res) {
  Coach.findById(req.params.id)
    .exec(function(err, coach) {
      if(err) {console.log(err)};

      res.render('client/index', {
          client: coach.clients,
          id: req.params.id
    });
  });
});


router.get('/new', function(req, res) {
  Coach.findById(req.params.id)
    .exec(function(err, coach) {
      if(err) {console.log(err)};
      res.render('client/new', {
        client: coach.clients,
        id: req.params.id
    });
});
});

router.post('/', function(req, res){
  var newClient = new Client({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    notes: req.body.notes
  });
console.log(newClient);
  Coach.findById(req.params.id)
  .exec(function(err,coach) {
    coach.clients.push(newClient);
    coach.save();
  })
  newClient.save(function(err, client) {
    if (err) {console.log(err)}
    console.log(client);
    res.redirect('/coaches/' + req.params.id + '/clients');
  })
})

module.exports = router;
