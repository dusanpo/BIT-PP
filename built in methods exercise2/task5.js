// Write a function to convert a string to its abbreviated form. 
// "John Snow" -> 	"John S."

function convertString(str){
    var name = str.split(" ");
    if(name.length > 1){
        return (name[0] + " " + name[1].charAt(0) + ".");
    }else{
       return name[0];
    }
    
}
console.log(convertString("John Snow"));



