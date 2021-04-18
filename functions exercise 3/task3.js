/*
Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/
function filterOut(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(isFinite(array[i]) && array[i] === parseInt(array[i]) && array[i] !== 0){
            newArray[newArray.length] = array[i];
        }

    }
  return newArray;
}
console.log(filterOut([NaN, 0, 15, false, -22, '', undefined, 47, null]));
