/*

Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (i = 0; i < a.length; i++) {
    c[c.length] = a[i];

    c[c.length] = b[i];

}
console.log(c);
