/*
Write a program that calculates a number of float values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
function floatValues(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        var isValid = isFinite(value);
        if (isValid && value !== parseInt(value) && value !== false && value !== null && value !== '') {
            newArray[newArray.length] = value;
        }

    }
    return newArray.length;
}
console.log(floatValues([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
