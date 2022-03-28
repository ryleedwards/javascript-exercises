const removeFromArray = function (array, ...Args) {
  let returnedArray = array;

  for (i = 0; i < Args.length; i++) {
    // Evaluates size of ...Args and determines number of items to search for
    let search = Args[i];
    console.log(`search = ${search}`);
    let index = returnedArray.indexOf(search);
    console.log(index);
    if (index > -1) {
      // Uses Args[i].length in case the passed search item is > 1 character
      returnedArray.splice(index, 1);
    }
  }
  return returnedArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
