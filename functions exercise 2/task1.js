/*
Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/
"use strict"
function check(input){
    if(typeof input === "string"){
        return true;
    }else{
        return false;
    }
    
}
console.log(check("My random string"));
// console.log(check(12));



