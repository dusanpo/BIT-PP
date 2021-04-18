/*
Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors,
 that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
 Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. */

function perfectNum(number){
    var temp = 0;
    for(var i = 0; i <= number/2; i++){
        if(number % i === 0){
            temp += i;
        }
    }
    if( temp === number && temp !== 0){
        return number + " is a perfect number.";
    }else{
        return number + " is not a perfect number."
    }
}
console.log(perfectNum(28));
