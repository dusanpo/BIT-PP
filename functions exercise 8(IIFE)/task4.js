/*
Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
    */
  
   
   function email(name,surname){
    var mail = "name.surname@gmail.com"
       var restOfMail = "";
       var index;
       for(var i = 0; i < mail.length; i ++){
           if(mail[i] === "@"){
               index = i;
           }
           if(index){
               restOfMail += mail[i];
           }
       }
    return name + "." + surname + restOfMail;    
   }
   console.log(email("pera","peric"));


 // IIFE
   var result = (function (name, surname){
    var mail = "name.surname@gmail.com"
    var restOfMail = "";
    var index;
    for(var i = 0; i < mail.length; i++){
        if(mail[i] === "@"){
            index = i;
        }
        if(index){
            restOfMail += mail[i];
        }
    }
    return name + "." + surname + restOfMail;     
   })("pera","peric");
   console.log(result);
   
   