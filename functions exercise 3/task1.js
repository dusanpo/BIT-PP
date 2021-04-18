/*
Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/


function myString(first, second, position){
    var current = "";
    var final = "";
    var position;
    if(position === undefined){
        position = 0;
      }
    for(var i = 0; i < first.length; i++){
        var character = first[i];
        if(i === position){
            character = second + " " + character;
            current += character;
        }else{
            current += character;
            final = current;
        }
    }
    return final;
}
console.log(myString("My random string", "JS"));
console.log(myString("My random string", "JS", 10));
