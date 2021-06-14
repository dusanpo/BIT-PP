/*
Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
    */

    function replaceLetters(string,sign){
        var newString = "";
        var count = 0;
        for(var i = 0; i < string.length; i++){
            if(string[i] === "M" || string[i] === "m"){
                count ++;
                newString += sign;
            }else{
                newString += string[i];
            }
        }
        return newString + ", " + count;
    }
    console.log(replaceLetters("prograMming","*"));

    // IIFE

    var result = (function (string,sign){
        var newString = "";
        var count = 0;
        for(var i = 0; i < string.length; i++){
            if(string[i] === "M" || string[i] === "m"){
                count += 1;
                newString += sign;
            }else{
                newString += string[i];
            }
        }
      return newString + ", " + count;
    })("prograMming","*");
    console.log(result);
    
    