var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

//requiring modules
var bmi = require("./Methods/bmi");
// var calories = require("Methods/caleries");



app.use(express.static("public"));
app.engine('handlebars', handlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');





//routes
app.get('/', function (req, res) {
 res.render("userProfile");
});
app.get('/BMI', function (req, res) {
 res.render("BMI");
});



var portNumber = process.env.CRUD_PORT_NR || 8080;
app.listen(portNumber, function() {
  console.log('App listening on: ' + portNumber);
});
