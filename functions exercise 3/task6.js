/*
Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function create(number, value){
    var array = [];
   for(var i = 0; i < number; i++){
       if(value === undefined){
           value = null;
           array[array.length] = value;
       }else{
      array[array.length] = value;
       }
   }
   return array;
}
console.log(create(6,0));
console.log(create(2, "none"));
console.log(create(2));
