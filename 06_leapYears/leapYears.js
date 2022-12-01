const leapYears = function (year) {
  if (year % 4 == 0) { // leap year
    if (year % 100 == 0) { //unless divisible by 100 
      if (year % 400 == 0) { //however leap year if divisible by 400
        return true;
      }
      return false;
    }
    return true;
  }
  
  return false;
};

// Do not edit below this line
module.exports = leapYears;
