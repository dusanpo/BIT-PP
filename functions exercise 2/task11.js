/*
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
"use strict"
function convert(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        var isValid = isFinite(value);

        if (isValid) {
            var number = parseFloat(value);
            newArray[newArray.length] = number;
        }
    }
    return newArray;
}
console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));