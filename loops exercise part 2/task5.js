/*
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var nums =[3, 11, -5, -3, 2];
var sum = 0;
for(var i=0;i < nums.length;i++){
    if (nums[i] > 0){
        sum += nums[i];  
    }    
}
console.log(sum);