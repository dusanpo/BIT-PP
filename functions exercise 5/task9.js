/*
Write a program that displays all the combinations of two numbers between 1 and 7.
 Don't display two of the same numbers at the same time.
  Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */


function allCombinations() {
    var result = [];
    var count = 0;

    for (i = 1; i <= 7; i++) {
        for (j = 1; j <= 7; j++) {
            if (i !== j) {
                count++;
                result[result.length] = [i, j];
            }
        }
    }

     return [result, " Number of possible combinations is " + count];
}
console.log(allCombinations());

