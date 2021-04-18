// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequent(array){
    var max = 0;
    var element;
    for(var i = 0; i < array.length; i++) {
        var next = array[i];
        var nextCount = 1;
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] === next) {
                nextCount++;
            }
        }
        if(nextCount > max){
            max = nextCount;
            element = next;

 }

}    
return element;
    
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,]));


