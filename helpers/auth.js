var bcrypt = require('bcrypt');
var User = require('../models/coach');

function createSecure(req, res, next) {
  var password = req.body.password;

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

function loginUser(req, res, next) {
  // YOU MIGHT CHANGE EMAIL TO USERNAME IF YOU DON'T WANT TO STORE EMAILS
  var username = req.body.username;
  var password = req.body.password;

  var query = User.findOne({ username: username }).exec();

  query.then(function(foundUser){
    console.log("found user: "+foundUser);
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"});

    } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err});
  });
}

function authorize(req, res, next) {
  var currentUser = req.session.currentUser;

  if (!currentUser || currentUser._id !== req.params.id ) {
    res.json({status: 401, data: 'unauthorized'});
  } else {
    next();
  }
};

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorize: authorize
};
