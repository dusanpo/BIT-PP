/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */


var array = [4, 2, 2, -1, 6,];
var min = "";
for(var i=0;i < array.length;i++){
    if (array[i] < min){
        min = array[i];
        index = i;
       // console.log(array[i] + ", " + i);   
       
         
    }   
}
console.log(min + ", " + index);   