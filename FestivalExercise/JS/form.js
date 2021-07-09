

var $movieTitle = document.querySelector("#titleInput");
var $createMovie = document.querySelector("#createMovieButton");
var $errorDisplay = document.querySelector("#errorDisplay");
var $titleLength = document.querySelector("#titleLength");
var $titleGenre = document.querySelector("#genre");

var $dateInputField = document.querySelector("#dateInput");
var $createProgramBtn = document.querySelector("#createProgramBtn");
var $addMovieToProgramBtn = document.querySelector("#addMovieToProgramBtn");
var $errorCreateProgram = document.querySelector("#errorCreateProgram");

var $newMoviesList = document.querySelector("#newMoviesList");
var $newProgramList = document.querySelector("#newProgramList");
var $selectMovie = document.querySelector("#selectMovie");
var $selectProgram = document.querySelector("#selectProgram");


var storage  = {
  listOfAllMovies: [],
  listOfAllPrograms: []

};


function validateFormData(title,length,genre){
  if(!title) {
    $errorDisplay.textContent = "Title is required!";
    
    return;
  }
if(!length){
    $errorDisplay.textContent = "Lenght of the movie is required!";

    return; 
  }
if(!genre){
  $errorDisplay.textContent = "Genre is required!";

  return;

}else{
  $errorDisplay.textContent = "";

  var movie = new Movie(title, length, genre)
     storage.listOfAllMovies.push(movie);
      
      var movieIndex = storage.listOfAllMovies.length - 1;
 
  
  
  var movieList = document.createElement("li");
  var movieGetData = movie.getData();
  var newMovieInListText = document.createTextNode(movieGetData);
  movieList.appendChild(newMovieInListText);
  $newMoviesList.appendChild(movieList);

  var option = document.createElement("option");
   option.appendChild(document.createTextNode(title));
   option.value = movieIndex;

  $selectMovie.appendChild(option);
  
}
};

var onMovieCreate = function (){
   
    var title = $movieTitle.value;
    var length = $titleLength.value;
    var genre = $titleGenre.value;
   
    validateFormData(title,length,genre);
       
};


//2
var createNewProgram = function() {
  var date = new Date($dateInputField.value);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var dayMonthYear = day + "." + month + "." + year + ".";

  if(!$dateInputField.value){
    $errorCreateProgram.textContent = "Date is required!";
    return;

  }else{

  $errorCreateProgram.textContent = "";
  var program = new Program(date);
  storage.listOfAllPrograms.push(program);
  var programIndex = storage.listOfAllPrograms.length - 1;

  var programList = document.createElement("li");
  var programGetData = program.getData();
  var newProgramInListText = document.createTextNode(programGetData);

  programList.setAttribute("id", "id-" + programIndex);
  programList.appendChild(newProgramInListText);
  $newProgramList.appendChild(programList);

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(dayMonthYear));
  opt.value = programIndex;
  $selectProgram.appendChild(opt);

  }
};

//3
var addMovieToProgram = function() {
  var movieValue = $selectMovie.value;
  var movieObject = storage.listOfAllMovies[movieValue];

  var programValue = $selectProgram.value;
  var programObject = storage.listOfAllPrograms[programValue];
  programObject.addMovie(movieObject);

 
  var selected = document.querySelector("#id-" + programValue);
  selected.textContent = programObject.getData();
};



$createMovie.addEventListener("click", onMovieCreate);
$createProgramBtn.addEventListener("click", createNewProgram);
$addMovieToProgramBtn.addEventListener("click", addMovieToProgram);


