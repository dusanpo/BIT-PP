/*
Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

var num1 = 0, num2 = -1, num3 = 4;

if(num1 > num2 && num1 > num3){

    if(num2 > num3){
        console.log(num1 + ", " + num2 + ", " + num3);
            
    }
    else{
        console.log(num1 + ", " + num3 + ", " + num2);
        
    }   
}
else if(num2 > num1 && num2 > num3){

    if(num1 > num3){
        console.log(num2 + ", " + num1 + ", " + num3);
           
    }
    else{
        console.log(num2 + ", " + num3 + ", " + num1);
        
    }
    
}
else if(num3 > num1 && num3 > num2){

    if(num1 > num2){
        console.log(num3 + ", " + num1 + ", " + num2);
        
    }
    else{
        console.log(num3 + ", " + num2 + ", " + num1);
        
    }
}
