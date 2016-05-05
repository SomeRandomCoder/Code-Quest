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


// if(bmi < 18.5){
//   results.innerHTML = bmi;
//   return bmi + "-" + "Underweight";
// }
// else if(bmi >= 18.5 && bmi <= 24.9){
//   results.innerHTML = bmi;
// return bmi + "-" + "Healthy";
// }
// else if(bmi >= 25.0 && bmi <= 29.9){
//   results.innerHTML = bmi;
//   return bmi + "-" + "Overweight";
// }
// else {
//   results.innerHTML = bmi;
//   return bmi + "-" + "Obese";
// }
//
};
