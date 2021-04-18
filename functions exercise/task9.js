// Write a program that calculates the sum of odd elements of a given array.

var nums = [2, 3, 4, 5, 6, 7];

function sumOfOdd(nums){
    var sum = 0;
   
    for(var i = 0; i < nums.length; i++){
        if( i % 2 !== 0){
            sum += nums[i];
        }
    }
  return sum;
}
console.log(sumOfOdd(nums));