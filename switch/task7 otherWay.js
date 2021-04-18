// // Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var x = 7;
var y = 5;
var result;
var operation = "/";

switch (operation) {
    case "+":
        result = x + y;
        break;
    case "-":
        result = x - y;
        break;
    case "*":
        result = x * y;
        break;
    case "/":
        result = y !== 0 ? x / y : "Can not be divided by 0";
        break;
    default:
        break;
}
console.log(result);
