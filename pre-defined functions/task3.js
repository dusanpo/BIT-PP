/*

Write a program to filter out falsy values from the array.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/
function filter(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        var isValid = isFinite(value);
        if (isValid && value !== 0 && value === parseInt(value)) {

            newArray[newArray.length] = value;

        }


    }
    return newArray;

}
console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]));






