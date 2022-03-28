const removeFromArray = function (array, ...Args) {
  let returnedArray = array;
  // Evaluates size of ...Args and determines number of items to search for
  for (i = 0; i < Args.length; i++) {
    //search is the element of Args[] for which we want to find in the array passed to removefromArray
    let search = Args[i];
    // indexOf method used to find element that matches search variable
    let index = returnedArray.indexOf(search);
    // if it exists in the passed array, it will provide an index of 0, 1, 2 . . .
    // if it does not exist, splice will not execute
    if (index > -1) {
      returnedArray.splice(index, 1);
    }
  }
  return returnedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
