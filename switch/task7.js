// Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var x = 5;
var y = 2;
var operation = "+";

switch (operation) {
    case "+":
        console.log(x + y);
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(x * y);
        break;
    case "/":
        if (y !== 0) {
            console.log(x / y);
        } else {
            console.log(" Can not be divided by 0");
        }
        break;
    default:
        break;

}