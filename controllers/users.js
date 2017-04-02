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


// trial row
// function appendRow() {
//     var tbl = document.getElementById('my-table'), // table reference
//         row = tbl.insertRow(tbl.rows.length),      // append table row
//         i;
//     // insert table cells to the new row
//     for (i = 0; i < tbl.rows[0].cells.length; i++) {
//         createCell(row.insertCell(i), i, 'row');
//     }
// }
//
// // create DIV element and append to the table cell
// function createCell(cell, text, style) {
//     var div = document.createElement('div'), // create DIV element
//         txt = document.createTextNode(text); // create text node
//     div.appendChild(txt);                    // append text node to the DIV
//     div.setAttribute('class', style);        // set DIV class attribute
//     div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
//     cell.appendChild(div);                   // append DIV to the table cell
// }

// var express = require('express');
// var router = express.Router();
// // added
// var User = require('../models/user.js');
// var authHelpers = require('../helpers/auth.js')
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// // added
// router.post('/', authHelpers.createSecure, function(req, res){
// });
//
// module.exports = router;

// res.send(req.body.username + req.body.password);

// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;
