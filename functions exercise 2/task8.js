/*

Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
"use strict"
function primeNum(number){
   for(var i = 2; i < number; i++){
       if(number % 2 === 0){
           return false;
       }
   } 
   return number > 1;
}
console.log(primeNum(2));

  

