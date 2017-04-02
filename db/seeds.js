var mongoose = require('mongoose');
// need to create a models/user file and model/coach
var Coach = require("../models/coach");
var Client = require("../models/client");
// require the models
// var User = require('../models/user');
// var Item = require('../models/item');
// var ProjectIdea = require('./models/project_idea');
// Use native promises

mongoose.promise = global.Promise;

Coach.remove({}, function(err) {
    console.log(err);
});
// Creating sample client and coach
var dee = new Coach({
    username: 'dee',
    password: 'dee'
});

var danny = new Client({
    first_name: 'Daniel',
    last_name: 'Worschestershire',
    email: "danny@gmail.com",
    phone: 29
});

danny.save()
dee.clients.push(danny)

dee.save(function(err) {
  if (err) console.log(err);

  console.log('dee created!');
});
