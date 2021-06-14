// Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 

var area = (function (a,b){
    var area = a * b;
    return area;
    
})(4,5);
console.log(area);

// other way
var a = 4;
var b = 5;
(function (a,b){

var surArea = a * b;
console.log(surArea);
    
})(a,b);
/*
(function (a,b){
var surArea = a * b;
console.log(surArea);  
})(4,5);
*/
