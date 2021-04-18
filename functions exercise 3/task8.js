/*
Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/
function find(string,word){
    var counter = 0;
    var currentWord = "";
    string = string + " ";
    
    for(var i = 0; i < string.length; i++){
        var currentChar = string[i];
        if(currentChar === " " || currentChar === "," || currentChar === "." || currentChar === "?" || currentChar === ":" || currentChar === ""){
            if(currentWord === word){
                counter ++;
            }
            currentWord = "";
        }else{
            currentWord += currentChar;
        }
    }

  return word + " was found " + counter + " times.";  
}
console.log(find("The quick fox, brown fox", "fox"));

