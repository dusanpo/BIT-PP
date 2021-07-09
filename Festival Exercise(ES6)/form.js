
const $movieTitle = document.querySelector("#titleInput");
const $createMovie = document.querySelector("#createMovieButton");
const $errorDisplay = document.querySelector("#errorDisplay");
const $titleLength = document.querySelector("#titleLength");
const $titleGenre = document.querySelector("#genre");

const $dateInputField = document.querySelector("#dateInput");
const $createProgramBtn = document.querySelector("#createProgramBtn");
const $addMovieToProgramBtn = document.querySelector("#addMovieToProgramBtn");
const $errorCreateProgram = document.querySelector("#errorCreateProgram");

const $newMoviesList = document.querySelector("#newMoviesList");
const $newProgramList = document.querySelector("#newProgramList");
const $selectMovie = document.querySelector("#selectMovie");
const $selectProgram = document.querySelector("#selectProgram");


const storage  = {
  listOfAllMovies: [],
  listOfAllPrograms: []

};


const validateFormData = (title,length,genre) => {
  if(!title) {
    $errorDisplay.textContent = `Title is required!`;
    
    return;
  }
if(!length){
    $errorDisplay.textContent = `Lenght of the movie is required!`;

    return; 
  }
if(!genre){
  $errorDisplay.textContent = `Genre is required!`;

  return;

}else{
  $errorDisplay.textContent = "";

  const movie = new Movie(title, length, genre)
     storage.listOfAllMovies.push(movie);
      
      const movieIndex = storage.listOfAllMovies.length - 1;
 
  
  
  const movieList = document.createElement("li");
  const movieGetData = movie.getData();
  const newMovieInListText = document.createTextNode(movieGetData);
  movieList.appendChild(newMovieInListText);
  $newMoviesList.appendChild(movieList);

  const option = document.createElement("option");
   option.appendChild(document.createTextNode(title));
   option.value = movieIndex;

  $selectMovie.appendChild(option);
  
}
};

const onMovieCreate = () => {
   
    const title = $movieTitle.value;
    const length = $titleLength.value;
    const genre = $titleGenre.value;
   
    validateFormData(title,length,genre);
       
};


//2
const createNewProgram = () => {
  const date = new Date($dateInputField.value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayMonthYear = `${day}.${month}.${year}.`;

  if(!$dateInputField.value){
    $errorCreateProgram.textContent = `Date is required!`;
    return;

  }else{

  $errorCreateProgram.textContent = "";
  const program = new Program(date); 
  storage.listOfAllPrograms.push(program);
  const programIndex = storage.listOfAllPrograms.length - 1;

  const programList = document.createElement("li");
  const programGetData = program.getData();
  const newProgramInListText = document.createTextNode(programGetData);

  programList.setAttribute("id", "id-" + programIndex);
  programList.appendChild(newProgramInListText);
  $newProgramList.appendChild(programList);

  const opt = document.createElement("option");
  opt.appendChild(document.createTextNode(dayMonthYear));
  opt.value = programIndex;
  $selectProgram.appendChild(opt);

  }
};

//3
const addMovieToProgram = () => {
  const movieValue = $selectMovie.value;
  const movieObject = storage.listOfAllMovies[movieValue];

  const programValue = $selectProgram.value;
  const programObject = storage.listOfAllPrograms[programValue];
  programObject.addMovie(movieObject);

 
  const selected = document.querySelector("#id-" + programValue);
  selected.textContent = programObject.getData();
};



$createMovie.addEventListener("click", onMovieCreate);
$createProgramBtn.addEventListener("click", createNewProgram);
$addMovieToProgramBtn.addEventListener("click", addMovieToProgram);


