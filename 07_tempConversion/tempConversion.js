const ftoc = function (tempF) {
  let returnTemp = (tempF - 32) * (5 / 9);
  return Math.round(returnTemp * 10) / 10;
};

const ctof = function (tempC) {
  let returnTemp = tempC * (9 / 5) + 32;
  return Math.round(returnTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

console.log(ftoc(32));
console.log(ctof(32));
