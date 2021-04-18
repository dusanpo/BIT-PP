/*
Write a program that calculates a number of integer values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/
function calculate(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];

        if (value === parseInt(value)) {
            newArray[newArray.length] = value;
        }
    }

    return newArray.length;
}
console.log(calculate([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
