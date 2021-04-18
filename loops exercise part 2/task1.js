/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */


var nums = [5, -4.2, 3, 7];
var num = 3;

for (i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
        result = "yes";
        break;

    } else {
        result = "no";

    }
}
console.log(result);

