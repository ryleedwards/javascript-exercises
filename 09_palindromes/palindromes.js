const palindromes = function (word) {
  let arr = Array.from(sanitize(word));
  let reversedArr = arr.slice();
  reversedArr.reverse();
  console.log(reversedArr);
  console.log(arr);
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  return equals(reversedArr, arr);
};

console.log(palindromes("A car, a man, a maraca."));

function sanitize(word) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  sanitized = word.replace(regex, "");
  sanitized2 = sanitized.replace(/\s/g, "");
  sanitized3 = sanitized2.toLowerCase();
  return sanitized3;
}

// Do not edit below this line
module.exports = palindromes;
