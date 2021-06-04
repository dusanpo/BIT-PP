/*
Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  
var sum1 = 0;
var sum = 0;

for(var i = 0; i <= 1000; i++){
    if(i % 2 === 0){
        sum += i;
        
    }    
}
for(var j = 0; j <= 500; j++){
    if( j % 2 !== 0){
     sum1 += j;
    }
}


console.log((sum - sum1) * 12.5);*/

function calculate(){
    var sumOfEven = 0;
    var sumOfOdd = 0;
    var subtract = 0;
    for(var i = 0; i <= 1000; i++){
        if( i % 2 === 0){
            sumOfEven += i;
        }
    }
    for(var j = 0; j <= 500; j++){
        if(j % 2 !== 0){
            sumOfOdd += j;
        }
    }
    subtract = sumOfEven - sumOfOdd;
    return subtract * 12.5;
}
console.log(calculate());



