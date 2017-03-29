var express = require('express');
var router = express.Router();
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
    client.save(function(err, client){
        if (err) { console.log(err); }

        console.log(client);
        // res.send(clients);
        res.render('client/index', {
              client: client
        });
    });
});

module.exports = router;
