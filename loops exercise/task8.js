// Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

var students = [
    ["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]
];

var averageMarks = 0;

for (var i = 0; i < students.length; i++) {
    averageMarks = averageMarks + students[i][1];
    var average = averageMarks / students.length;
}

console.log("Average mark: " + averageMarks / students.length);

if (average < 60) {
    console.log("Correspondig grade : F");
}
else if (average < 70) {
    console.log("Correspondig grade : D");
}
else if (average < 80) {
    console.log("Correspondig grade : C");
} else if (average < 90) {
    console.log("Correspondig grade : B");
} else if (average < 100) {
    console.log("Correspondig grade : A");
}
