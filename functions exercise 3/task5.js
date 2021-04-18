/*
Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/

function lastElem(array,number){
    var result = [];
    if(number === undefined){
        //number = 1;
        result = array[array.length -1];
    }
    for(var i = array.length - number; i < array.length; i++){
        result[result.length] = array[i];
    }
   return result; 
}
console.log(lastElem([7, 9, 0, -2]));
console.log(lastElem([7, 9, 0, -2], 2));


