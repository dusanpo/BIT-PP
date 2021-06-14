/*Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/



(function () {

  var filter = function (num) {
    var newArray = [];
    for (var i = 0; i < num.length; i++) {
      if (num[i] % 2 !== 0) {
        newArray[newArray.length] = num[i];
      }
    }

    return newArray;
  }

  console.log(filter([2, 8, 11, 4, 9, 3, 14, 18, 21, 25]));
})();