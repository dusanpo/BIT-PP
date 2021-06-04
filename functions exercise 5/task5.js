/*
(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/
function descend(a) {
    var sort = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            if (a[j] > a[i]) {
                sort = a[j];
                a[j] = a[i];
                a[i] = sort;
                
            }
        }

    }
    return a;
}
console.log(descend([13, 11, 15, 5, 6, 1, 8, 12]));


//bubble sort

function bubbleSort(arr){
    for(var j = 0; j < arr.length; j++){
        for(var i = 0; i < arr.length; i++){
            var currentElement = arr[i];
            var nextElement = arr[i +1];
            if(nextElement > currentElement){
                arr[i] = nextElement;
                arr[i + 1] = currentElement;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([13, 11, 15, 5, 6, 1, 8, 12]));





