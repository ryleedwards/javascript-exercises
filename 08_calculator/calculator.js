const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  return numArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const multiply = function (numArray) {
  return numArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  //handle for if num = 0 . . . (0! = 1)
  if (num == 0) {
    return 1;
  } else {
    //create array of factorials incrementing down from init value
    let factArr = [];
    const numInitial = num;
    for (i = 0; i < numInitial; i++) {
      factArr[i] = num;
      console.log(`i=${i} = ${factArr[i]}`);
      num--;
    }
    //reduce array with multiplication
    return factArr.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
