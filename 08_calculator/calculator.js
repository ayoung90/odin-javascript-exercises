const add = function (input_1, input_2) {
  return input_1 + input_2;
};

const subtract = function (input_1, input_2) {
  return input_1 - input_2;
};

const sum = function (inputArray) {
  let total = 0;
  inputArray.forEach((item) => {
    total = total + item;
  });
  return total;
};

const multiply = function (inputArray) {
  let total = 1;
  inputArray.forEach((item) => {
    total = total * item;
  });
  return total;
};

const power = function (input_1, input_2) {
  return input_1 ** input_2;
};

const factorial = function (input) {
  if (input === 0) return 1;
  let total = 1;
  while (input > 1) {
    total = total * input;
    input--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
