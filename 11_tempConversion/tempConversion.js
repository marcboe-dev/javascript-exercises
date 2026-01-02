const convertToCelsius = function(tempFahrenheit) {
  let celsius = (tempFahrenheit - 32) / (9/5); 
  let rounded = Math.round(celsius * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(tempCelsius) {
  let fahrenheit = tempCelsius * (9/5) + 32;
  let rounded = Math.round(fahrenheit * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
