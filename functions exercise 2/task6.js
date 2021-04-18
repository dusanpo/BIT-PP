/*
Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form.
 If there are no occurrences of the character, function should return -1.
 */
"use strict"
function posInHumanNumerationForm(string, letter) {
    var index = -1;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            index = i + 1;
        }
    }
    return index;
}
console.log(posInHumanNumerationForm("Dusanan", "n"));
