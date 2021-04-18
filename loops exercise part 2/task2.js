/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var nums = [-3, 11, 5, 3.4, -8];

for( i = 1; i < nums.length; i++){
    if(nums[i] > 0){ 
      nums[i] *= 2;
    }    
}
console.log(nums);


