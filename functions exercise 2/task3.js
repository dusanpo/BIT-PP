/*Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/
"use strict"

function concatenate(string, times) {
    var result = "";
    if (times === undefined) {
        times = 1;
    }
    for (var i = 0; i < times; i++) {
        result += string;

    }
    return result;
}

console.log(concatenate("Ha",3));
console.log(concatenate("Ha"));