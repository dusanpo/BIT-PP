/*
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function find(array) {

    var min = array[0];
    var max = array[0];
    var posMin = 0;
    var posMax = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            posMin = i;
        }
        if (array[i] > max) {
            max = array[i];
            posMax = i;
        }
    }
    array[posMin] = max;
    array[posMax] = min;
    return array;
}
console.log(find([3, 500, 12, 149, 53, 414, 1, 19]));
