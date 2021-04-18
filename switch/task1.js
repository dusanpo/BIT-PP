/*
Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/
var day = "4";

switch (day) {
    case "1":
        console.log('Monday');
        break;
    case "2":
        console.log('Tuesday');
        break;
    case "3":
        console.log('Wendsday');
        break;
    case "4":
        console.log('Thrusday');
        break;
    case "5":
        console.log('Friday');
        break;
    case "6":
        console.log('Saturday');
        break;
    case "7":
        console.log('Sunday');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break;

}
