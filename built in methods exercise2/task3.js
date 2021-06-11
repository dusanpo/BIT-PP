// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


function alphabetizeString(string){
  var result = "";
  var newStr = "";
  var sorted;
  newStr = string.split(" ");
  //console.log(newStr);
  newStr.forEach(function (elem){ // elem = newStr[i]
    sorted = elem.split("").sort().join("");
    //console.log(sorted);
    result += sorted.concat(" ");
    
  });
  return result;
  
}
console.log(alphabetizeString("Republic Of Serbia"));




 

  
   
  









  





