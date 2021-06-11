// Write a program that accepts a string as input and swaps the case of each character.
//  For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//   var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

var str = "The Quick Brown Fox";
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
for(var i = 0; i < str.length; i++){
    if(UPPER.indexOf(str[i]) !== -1){
        result.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i]) !== -1){
        result.push(str[i].toUpperCase());
    }else{
        result.push(str[i]);
    }
}
var output = result.join("");
console.log(output);







