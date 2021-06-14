/*
Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

function calculate(number){
   
    return parseInt(number, 10);
}
console.log(calculate(034));
 
// IIFE

var result = (function (){
    var number = 034;
    return parseInt(number, 10);
    
})();
console.log(result);

//var n = 034;
(function (){
    var n = 034;
    console.log(parseInt(n, 10));
    
    
})();
    


