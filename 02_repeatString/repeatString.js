const repeatString = function (string, num) {
  if (num >= 0) {
    let returnedString = "";
    for (i = 0; i < num; i++) {
      returnedString += string;
    }
    return returnedString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
