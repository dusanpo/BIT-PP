/*
Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
"use strict"
function convert(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        
        if (string[i] === " ") {
            array[array.length] = null;
        } else {
            array[array.length] = string[i];
        }

    }
    return array;
}
console.log(convert("Random"));
console.log(convert("I am"));

