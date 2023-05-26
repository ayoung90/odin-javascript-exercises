/**
 * Determines whether or not a given string is a palindrome
 * @param {String} input
 * @returns Boolean
 */
const palindromes = function (input) {
  input = input.toLowerCase();

  let punctuationLess = input.replace(/[^\p{L}\s]/gu, "");
  let spaceLess = punctuationLess.replace(/\s+/g, "");

  //split into an array to reverse
  const inputArray = spaceLess.split("");
  const reverseArray = inputArray.slice().reverse();

  //join to compare input string vs reversed
  return inputArray.join("") === reverseArray.join("");
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("race. car"));
