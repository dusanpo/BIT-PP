// Write a function that adds string to the left or right of string,
//  by replacing it’s characters.

// '0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000


function rightToLeft(str, index, char){
    if(index > str.length - 1){
        return str;
    }else{
        return char + str.substring(index, str.length - 1);
    }

}
console.log(rightToLeft("00000000", 2, "123"));



function leftToRight(str, index, char){
    if(index > str.length -1){
        return str;
    }else{
        return str.substring(0, index) + char;
    }
    
}
console.log(leftToRight("0000", 1, "123"));









    














