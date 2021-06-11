
//Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
//12345 -> 54321

function reverseNum(){
var num = 12345;
var str = 0;
var number;
	//num = num + "";
    var n = num.toString();
  
	str =  n.split("").reverse().join("");
    number = parseInt(str);
    return number;
  
}
console.log(reverseNum());
console.log(typeof reverseNum());


var n = 15;
var num = n.toString();
console.log(num);
console.log(typeof num);


