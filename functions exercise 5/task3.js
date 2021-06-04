/*
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
function initialize(a,b){
    var result = "";
    var student;
    var points;
    var grade;
    var newArray = [];
    for(var i = 0; i < a.length; i ++){
        student = a[i];
        points = b[i];
        if(points < 50){
            grade = 0;       
      }else if(points <= 60){
          grade = 6;
      }else if(points <= 70){
          grade = 7;
      }else if(points <= 80){
          grade = 8;
      }else if(points <= 90){
          grade = 9;
      }else if(points > 90){
          grade  = 10;
      }
      if(grade === 0){
          result = student + " acquired " + points + " failed to complete the exam";
      }else{
          result = student + " acquired " + points + " and earned " + grade + "."
      }
 newArray[newArray.length] = result;
  
      }
 return newArray;
}
console.log(initialize([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],[ 50, 39, 63, 72, 99, 51, 83, 59 ]));

