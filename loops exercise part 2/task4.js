/*Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

var nums = [-4, 2, 2, -1,-1, 6];

var smallest = nums[0];
var smaller = Infinity;

for (i = 0; i < nums.length; i++) {

    if (nums[i] < smaller) {

        if (nums[i] < smallest) {
            smaller = smallest;
            smallest = nums[i];


        }
        
    }
}

console.log(smaller);
// console.log(smallest);