/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var a  = [4,5,6,2];
var b = [3,8,11,9];
var c = [];
for(i = 0; i < a.length; i++){
    for(j = 0; j < b.length; j++){
        
        c = a  + "," + b;

    }
}
console.log(c);