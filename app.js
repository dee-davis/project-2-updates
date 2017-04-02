pry = require('pryjs');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var authors = require('.routes/authors');
var session = require('express-session');
var methodOverride = require('method-override');
// var db = require('.db');
var hbs =('hbs');
mongoose.connect('mongodb://localhost/project-2');

var client = require('./controllers/client.js');
// var index = require('./routes/index');
var index = require('./controllers/index.js');
// var users = require('./routes/users');
// var users = require('./controllers/users.js');
// added
var coaches = require('./controllers/coaches.js');
var app = express();

var seeds = require('./db/seeds');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));
// no route for /
app.use('/', index);
// app.use('/users', users);

// app.use('/authors', authors);added
app.use('/coaches', coaches);
// If type in client, goes to client controller
app.use('/coaches/:id/clients', client);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
// use methodOverride
app.use(methodOverride('_method'));
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get("/:name", function(req, res){
  console.log(req.params);
  res.send(`Hello, ${req.params.name}!`);
});
// app.listen(3000, function() {
//   console.log('hey');
// });

module.exports = app;
