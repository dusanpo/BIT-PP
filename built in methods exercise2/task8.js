
// Write a function to hide email addresses to protect them from unauthorized users.
// "somerandomaddress@example.com" -> "somerand...@example.com"
function hideMail(mail){
    var firstEight = "";
    var restOfMail = "";
     var indexOfAt;
    for(var i = 0; i < mail.length; i++) {
        if( i < 8){
            firstEight = firstEight.concat(mail[i]);
        }
        if(mail[i].endsWith("@")){
         indexOfAt = i;
        }
        if(indexOfAt) {
          restOfMail = restOfMail.concat(mail[i]);
        }
    }
   return firstEight + "..." + restOfMail; 
}
console.log(hideMail("somerandomaddress@example.com"));