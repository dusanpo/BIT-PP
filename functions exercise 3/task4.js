/*
Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number */

//1

function reverseNum(number) {
    var result = 0,
      counter = 0;
    for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
      counter = i % 10;
      result = result * 10 + counter;
    }
    return result;
  }
  
  console.log(reverseNum(12345));


  
// 2

function rev(n){
 var reverse = 0;
 var remainder = 0;   
while (n > 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = parseInt(n / 10);
}
return reverse;
}
console.log(rev(3521));


//3

function reverse(a){
    var result = 0;
     a += "";
    for(var i = a.length-1; i >= 0; i--){
        result += a[i];
    }
    return parseInt(result);
}
console.log(reverse(12345));


//4

function reverseNumber(number) {
  var result = 0;
  while (number != 0) {
      result *= 10;
      result += number % 10;
      number -= number % 10;
      number /= 10;
  }
  return result;
}
console.log(reverseNumber(6789))
   



