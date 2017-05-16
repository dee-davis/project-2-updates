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
// delete this
var danny = new Client({
    _id: '123hunna',
    first_name: 'Daniel',
    last_name: '',
    email: "danny@gmail.com",
    phone_number: 29,
    notes: 'Test'
});

danny.save()
dee.clients.push(danny)

dee.save(function(err) {
  if (err) console.log(err);

  console.log('dee created!');
});
console.log(process.env.MONGODB_URI);
// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/project-two');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});
