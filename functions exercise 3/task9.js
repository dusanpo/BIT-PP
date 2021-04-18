/*
Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/
function hideMail(mail){
    var firstThree = "";
    var restOfMail = "";
     var indexOfAt;
    for(var i = 0; i < mail.length; i++) {
        if( i < 3){
            firstThree += mail[i];
        }
        if(mail[i] === "@"){
         indexOfAt = i;
        }
        if(indexOfAt) {
          restOfMail += mail[i];
        }
    }
   return firstThree + "..." + restOfMail; 
}
console.log(hideMail("myemailaddress@bgit.rs"));
