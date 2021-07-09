

function Movie(title, length, genre) {
    Genre.call(this, genre);
    this.title = title;
    this.length = parseInt(length);
}

function Genre(genre) {
    this.genre = genre;

}
Movie.prototype = Object.create(Genre.prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.getData = function () {
    return `${this.title}, ${this.length} min. ${this.genre.charAt()}${this.genre.charAt(this.genre.length - 1).toUpperCase()}`;

}

function Program(date){
    this.date = new Date(date);
    this.listOfMovies = [];
    
}

Program.prototype.totalMovieDuration = function (){
    let result = 0;
    //console.log(result);
    
    this.listOfMovies.forEach(function (movie){
        result += movie.length;
        
    });
    return result;
    
}
Program.prototype.addMovie = function (movie){
    this.listOfMovies.push(movie);
    
}

Program.prototype.totalNumberOfMovies = function (){
    return this.listOfMovies.length;
    
}

Program.prototype.getData = function (){
   // var date  = new Date(this.date);
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    const dayMonthYear = `${day}.${month}.${year}.`;
    if(this.listOfMovies.length === 1){
    return `${dayMonthYear}, ${this.totalNumberOfMovies()} movie, duration: ${this.totalMovieDuration()} min.`;
    }else{
      return `${dayMonthYear}, ${this.totalNumberOfMovies()} movies, duration: ${this.totalMovieDuration()} min.`; 
    }



    
}







