/*
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var find = function (array) {
    var index = 0;
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;

        }
    }
    return min + ", " + index;

}
console.log(find([4, 2, 2, -1, 6]));
