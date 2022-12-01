const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let start = num1;
  let end = num2;

  if (num1 > num2) {
    start = num2;
    end = num1;
  }
  let count = 0;
  for (i = start; i <= end; i++) {
    count = count + i;
  }
  return count;
};

// Do not edit below this line
module.exports = sumAll;
