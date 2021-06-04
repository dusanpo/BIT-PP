/*
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

//1
function checkPalindrome(inputString) {

    if(inputString.length === 1){
        return true;
    }else{
        var i = 0;
        var j = inputString.length -1;
        while(i < j){
            if(inputString[i] !== inputString[j]){
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
}
console.log(checkPalindrome("eye"));

//2 - spaces are ignored

function isPalindrome(string){
    var withSpaces = "";
    var noSpaces = "";

    for(var i = 0; i < string.length; i++){
        withSpaces += string[i];
    }
    for(var i = 0; i < withSpaces.length; i++){
        if(withSpaces[i] !== " "){
            noSpaces += withSpaces[i];
        }
    for(var j = withSpaces.length -1; j >= 0; j--){
        if(noSpaces[i] === withSpaces[j]){
            return true;

        }else{
            return false;
        }
    }

    }
    
}
console.log(isPalindrome("a nut for a   jarof tuna"));
console.log(isPalindrome("geek"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("k"));





   



