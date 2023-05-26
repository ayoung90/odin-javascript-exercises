const ERROR_CODE = "OOPS";

/**
 *
 * @param {Number} input
 * @returns Number
 */
const fibonacci = function (input) {
  input = Number(input);
  if (isNaN(input) || input < 1) {
    return ERROR_CODE;
  } else if (input === 1) {
    return 1;
  }

  let fibNum1 = 1;
  let fibNum2 = 0;
  let fibNum3 = 0;

  while (input > 1) {
    fibNum3 = fibNum2;
    fibNum2 = fibNum1;
    fibNum1 = fibNum1 + fibNum3;

    input--;
  }

  return fibNum1;
};

// Do not edit below this line
module.exports = fibonacci;
