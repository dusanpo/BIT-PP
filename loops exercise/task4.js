// Write a program to compute the sum and product of an array of integers.
var array = [1,2,3,4,5,6];
var sum = 0;
var product = 1;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    product *= array[i];
}
console.log("Sum : " + sum + "\nProduct : " + product);
