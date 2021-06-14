/*
Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4] */ 

   var result = (function(array){
       var temp;
       temp = array[0];
       array[0] = array[array.length - 1];
       array[array.length - 1] = temp;
       return array;
       
   })([4, 5, 11, 9]);
   console.log(result);

   // other way

   var input = [4, 5, 11, 9];
   (function (array){

       var temp = 0;
       temp = array[0];
       array[0] = array[array.length - 1];
       array[array.length - 1] = temp;
       console.log(array);
       
       
   })(input);
