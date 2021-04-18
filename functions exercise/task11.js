/*
Write a program that concatenates a given string given number of times. 
For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */


var letters = "";
var times = 0;
function numberOfTimes(letters, times) {
    var concatenates = "";
    while (times > 0) {
        concatenates += letters;
        times--;
    }
    return concatenates;

}
console.log(numberOfTimes("abc", 4));