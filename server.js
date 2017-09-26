// Imports --------------------------------------------
var express  = require('express');
var app      = express();
var openUrl  = require('openurl')


// Api ------------------------------------------------
app.use(express.static(__dirname + '/client'));


// Server ---------------------------------------------
app.listen(8080);


// Open browser ---------------------------------------
openUrl.open("http://localhost:8080")


console.log("App listening on port 8080");
