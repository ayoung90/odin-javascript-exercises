/*
 * use Math.round + *10 & /10 to calculate to exactly 1dp
 */

const convertToCelsius = function (temp) {
  // (x - 32)* 5/9
  return Math.round((((temp - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  //x * 9/5 + 32
  return Math.round(((temp * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
