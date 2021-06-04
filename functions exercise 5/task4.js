/*
(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
function sortArray(array) {
  var newArray = [];
  var sorted = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        sorted = array[j];
        array[j] = array[i];
        array[i] = sorted;
        
      }
    }
  }
  for (var i = 0; i < array.length; i++) {
    newArray[newArray.length] = array[i] * 2;
  }
  return newArray;
}

console.log(sortArray([13, 11, 15, 5, 6, 1, 8, 12]));