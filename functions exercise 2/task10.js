// Write a function to get the first n characters and add “...” at the end of newly created string.
"use strict"

function getCharacters(string, number) {
    var result = "";
    if (number > string.length) {
        return "Pick smaller number";
    }
    for (var i = 0; i < number; i++) {
        result += string[i];
    }
    return result + "...";
}
console.log(getCharacters("Health is wealth", 9));






