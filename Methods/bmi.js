exports.bmi = function(){
var userWeightkg = document.getElementById("userWeight");
var userHeight = document.getElementById("userHeight");
var statistics = document.getElementById("BMIstats");
//if height is entered in cm it will be converted to m.
if(userHeight > 100){
userHeight = userHeight / 100;
}


var bmi = userWeightkg / (userHeight * userHeight);
if(bmi < 18.5){
  statistics.innerHTML = bmi;
  return bmi + "-" + "Underweight";
}
else if(bmi >= 18.5 && bmi <= 24.9){
  statistics.innerHTML = bmi;
return bmi + "-" + "Healthy";
}
else if(bmi >= 25.0 && bmi <= 29.9){
  statistics.innerHTML = bmi;
  return bmi + "-" + "Overweight";
}
else {
  statistics.innerHTML = bmi;
  return bmi + "-" + "Obese";
}

};
