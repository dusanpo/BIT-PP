/*
Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “num1”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: num1  */

var num1 = 10;
if(typeof num1 === "number"){
    console.log(num1 + " is a number.");

}
else{
    console.log(num1 + " is not a number.");
    
}

if(num1 % 2 === 0){
    console.log(num1 + " / 2 = " + num1 / 2);
      
}
else{
    console.log("num1");
    
}




