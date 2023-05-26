/**
 * Given an array of objects representing people with a birth and death year, return the oldest person.
 * @param {Array} input
 * @returns
 */
const findTheOldest = function (input) {
  //sort the array by descending age first
  const sorted = input.sort((a, b) => {
    const currentDate = new Date().getFullYear();
    const aAge = (a.yearOfDeath ?? currentDate) - a.yearOfBirth;
    const bAge = (b.yearOfDeath ?? currentDate) - b.yearOfBirth;

    if (aAge < bAge) {
      return 1;
    } else {
      return -1;
    }
  });

  //return first item (oldest)
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
