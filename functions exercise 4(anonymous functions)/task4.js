/*
Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var findSecondSmallest = function (a) {
    var min = a[0];
    var secondmin = a[0];

    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] > min && a[i] < secondmin) {
            secondmin = a[i];
        }
    }
    return secondmin;
}
console.log(findSecondSmallest([4, 2, 2, -1, 6]));
