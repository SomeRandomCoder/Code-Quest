var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

//requiring modules

var bmi = require('./Methods/bmi');

// var achievements = require('./Methods/achievements');
// var challenges = require('Methods/challenges');
// var exercise = require('Methods/exercise');
// var user = require('Methods/user');


app.use(express.static("public"));
app.engine('handlebars', handlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//routes
app.get('/challenges',function(req, res){
    res.render('challenges');
});

app.get('/challenges', function (req, res) {
 res.render('challenges');
});

app.get('/', function (req, res) {
 res.render('index');
});

app.get('/userProfile', function (req, res) {
 res.render("userProfile" , {
   layout : false
   });
});
app.get('/BMI', function (req, res) {
 res.render("BMI");
});

app.get('/exercise', function(req, res) {
  res.render('exercise');
});
app.get('/calorie', function(req, res){
  res.render("calorie");
});
app.get('/achievements', function(req, res){
  res.render("achievements");
});



var portNumber = process.env.CRUD_PORT_NR || 8080;
app.listen(portNumber, function() {
  console.log('App listening on: ' + portNumber);
});
