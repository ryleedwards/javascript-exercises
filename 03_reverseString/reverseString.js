const reverseString = function (string) {
  let original = string;
  let strArray = [],
    reversedArray = [];
  for (i = 0; i < original.length; i++) {
    strArray[i] = original.charAt(i);
  }
  reversedArray = strArray.reverse();
  return reversedArray.join(``);
};

// Do not edit below this line
module.exports = reverseString;
