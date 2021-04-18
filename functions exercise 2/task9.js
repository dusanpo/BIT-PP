/*
Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/
"use strict"

function replace(first, second){
    var result = "";
    if(second === undefined){
        second = "-"
    }
    for(var i = 0; i < first.length; i++){
        var string = first[i];
        if(string === " "){
            result += second;
        }else{
            result += string;
       }

    }
    return result;
}
console.log(replace("My random string", "+"));
