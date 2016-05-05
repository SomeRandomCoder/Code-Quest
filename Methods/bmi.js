
exports.bmi = function(){
var userWeight = document.getElementById("userWeight");
var userHeight = document.getElementById("userHeight");
var statistics = document.getElementById("BMIstats");
var results = document.getElementById("result");

//if height is entered in cm it will be converted to m.
if(userHeight > 100){
userHeight = userHeight / 100;
}


var bmi = userWeight / (userHeight * userHeight);

};
