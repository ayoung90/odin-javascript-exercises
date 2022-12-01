const removeFromArray = function () {
  let array = arguments[0];
  let argArray = [];

  // Add all remaining arguments to array
  for (let i = 1; i < arguments.length; i++) {
    argArray.push(arguments[i]);
  }

  return array.filter((item) => !argArray.includes(item));
};

console.log(removeFromArray([1, 2, 3], 1));

// Do not edit below this line
module.exports = removeFromArray;
