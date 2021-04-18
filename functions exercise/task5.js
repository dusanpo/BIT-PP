/*
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****              */
function draw(n){
    var square = "";
    for(var rows = 0; rows < n; rows++){
        for(var columns = 0; columns < n; columns++){
            if(rows === 0 || rows === n -1){
                square += "*";
            }else if(columns === 0 || columns === n -1){
                square += "* ";
            }else{
                square += " ";
            }
            
        }
        square += "\n";
    }
    return square;
}
console.log(draw(5));
