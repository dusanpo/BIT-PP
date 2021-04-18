/*
Write a function to find the position of the first occurrence of a character in a string. 
The result should be the position of character. If there are no occurrences of the character, the function should return -1.
*/
"use strict"
function position(string, letter){
    var index = -1;
   // var letter = "n";
    for(var i = 0; i < string.length; i ++){
        if(string[i] === letter){
            index = i;
           break;
        }
    }
    return index;
}
console.log(position("Dusanan","n"));
