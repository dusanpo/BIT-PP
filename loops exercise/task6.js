// Write a program that prints the elements of the following array.

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];
  for(var i = 0; i < 3; i++){
      for(var j = 0; j < 4; j++){
          
      console.log(a[i][j]);  
      }    
  }

 

  // drugi način

  var b = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

    var result = "";
    for(var k = 0; k < b.length; k++){
        var currentElement = b[k];
        for(var m = 0; m < currentElement.length; m++){
            var currentValue = currentElement[m];
            result = result + currentValue + "\t";
        }
   result = result + "\n"
    }
    
    console.log(result);
    
    