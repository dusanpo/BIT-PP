/*
Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed. */
"use strict"

function calculate(gender, yearOfBirth) {
    var year = 2021;
    var forMale = 65;
    var forFemale = 60;
    var result = 0;
    if (gender === "male") {
        result = forMale - (year - yearOfBirth);
    } else if (gender === "female") {
        result = forFemale - (year - yearOfBirth);
    }if(result <= 0){
        result = "This person is retired";
    } else if(yearOfBirth > year){
        result = "This person is not even born yet";
    }
  return result;
}
    
console.log(calculate("female",1980));
console.log(calculate("male",2025));


