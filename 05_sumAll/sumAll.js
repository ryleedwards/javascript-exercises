const sumAll = function (num1, num2) {
  let sum = 0;

  //check for negative values
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  if (num1 < num2) {
    while (num1 <= num2) {
      sum += num1;
      num1++;
    }
  } else if (num1 > num2) {
    while (num1 >= num2) {
      sum += num1;
      num1--;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
