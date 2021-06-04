/*
Define a 10 element array. Take the first two letters from every string (that has at least 2 letters)
 in the array and create a new string from them. Print it out in the console.

Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa  
*/


function takeFirstTwo(array){
    var newStr = "";
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] === "string" && array[i].length >= 2){
            for(var j = 0; j < 2; j++){
            newStr += array[i][j];
            }
        }
    }
  return newStr;  
}
console.log(takeFirstTwo(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));



