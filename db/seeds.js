var mongoose = require('mongoose');
// need to create a models/user file and model/coach
var User = require("../db/schema.js").User;

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

var saintExupery = new User({
    first_name: 'Antoine',
    last_name: 'de Saint-Exupery',
    username: 'user1',
    password: 'password',
});

var fforde = new User({
    first_name: 'Jasper',
    last_name: 'Fforde',
    username: 'user2',
    password: 'password',
});

var willig = new User({
    first_name: 'Lauren',
    last_name: 'Willig',
    username: 'user3',
    password: 'password',
});

var lutz = new User({
    first_name: 'Lisa',
    last_name: 'Lutz',
    username: 'user4',
    password: 'password',
});


saintExupery.save(function(err) {
  if (err) console.log(err);

  console.log('de Saint-Exupery created!');
});

fforde.save(function(err) {
  if (err) console.log(err);

  console.log('Fforde created!');
});

willig.save(function(err) {
  if (err) console.log(err);

  console.log('Willig created!');
});

lutz.save(function(err) {
  if (err) console.log(err);

  console.log('Lutz created!');
});
