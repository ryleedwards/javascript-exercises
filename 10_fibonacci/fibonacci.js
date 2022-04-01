const fibonacci = function (n) {
  // return x, y, n . . . from fibonacci sequence
  let nParsed = parseInt(n);
  if (nParsed > 0) {
    let array = [1, 1];
    if (nParsed > 1) {
      for (i = 2; i < nParsed; i++) {
        array[i] = array[i - 2] + array[i - 1];
      }
    }
    return array[n - 1];
  }
  return "OOPS";
};

console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
