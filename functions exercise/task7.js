// Write a program that calculates a number of digits of a given number. 

function numberOfDigits(num) {
    var count = 0;
    if (num < 0) {
        num = num * -1;
    }
    for (var i = num; i >= 1; i = i / 10) {
        count++;
    }
    return count;
}
var result = numberOfDigits(123);
console.log(result);

