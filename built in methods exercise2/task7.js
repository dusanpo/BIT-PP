
// Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"


function capitalizeFirstLetter(string){
 var output = string[0]; // var output = string.charAt(0);
 return output.toUpperCase().concat(string.slice(1));

    
}
console.log(capitalizeFirstLetter("js string exercises"));




