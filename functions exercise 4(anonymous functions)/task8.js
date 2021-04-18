/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var concatenate = function (a,b){
    var newArray = a;
    for(var i = 0; i < b.length; i++){
        newArray[newArray.length] = b[i];
    }
    return newArray;
}
console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));
