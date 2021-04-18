/*
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
    */
var check = function (a) {
    var result = true;
    for (var i = 0, j = a.length - 1; i < a.length; i++, j--) {
        if (a[i] !== a[j]) {
            result = false;
            break;
        }
    }
    if (result) {
        return "The array is symetric.";

    } else {
        return "The array is not simetric.";
    }
}
console.log(check([2, 4, -2, 7, -2, 4, 2]));
