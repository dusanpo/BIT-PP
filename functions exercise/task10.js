/*
Write a program that calculates the number of appearances of a letter a in a given string.
 Modify the program so it calculates the number of both letters a and A. */

var str = "Check letters AAaAa";
var letter = "";
function counting(str, letter) {
    var count = 0;


    for (var i = 0; i < str.length; i++) {

        if (str[i] == "a" || str[i] == "A") {
            count += 1;
        }
    }
    return count;
}
var result = counting(str, letter);
console.log(result);