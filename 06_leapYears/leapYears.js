const leapYears = function (year) {
  // divisible by four hundred (leap year)
  if (year % 400 == 0) {
    return true;
    // divisible by 100 (not leap year)
  } else if (year % 100 == 0) {
    return false;
    // divisible by 4 (leap year)
  } else if (year % 4 == 0) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
