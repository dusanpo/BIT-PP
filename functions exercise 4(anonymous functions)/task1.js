/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/
var check = function (a, e){
    var result = "";
    for(var i = 0; i < a.length; i++){
        if(a[i] === e){
            result = "yes";
            break;
        }else{
            result = "no";
        }
    }
    return result;
}
console.log(check([5, -4.2, 3, 7], 3));
