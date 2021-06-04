/*

Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/


function greatestDivisor(num1, num2) {
    
    var max = 0;
    if (num1 > num2) {
        max = num1;
    }else{
         max = num2;
    }
    for (i = 1; i < max; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = "Greatest common divisor of two integers is " + i + ".";
        }
    } 
    return result;
}
console.log(greatestDivisor(192, 42));
console.log(greatestDivisor(9, 81));