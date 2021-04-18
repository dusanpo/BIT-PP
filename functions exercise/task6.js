
//Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *      

function horizontalChart(a, b, c) {
    var stars = "";
    for (var i = 0; i < a; i++) {
        stars += " *";
    }
    stars += "\n";
    for (var i = 0; i < b; i++) {
        stars += " *";
    }
    stars += "\n";
    for (var i = 0; i < c; i++) {
        stars += " *";
    }
    return stars;
}

result = horizontalChart(5,3,7);
console.log(result);

