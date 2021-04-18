/*
Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 
*/
"use strict"
function counting(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(counting("My random string", "n"));

