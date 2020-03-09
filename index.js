//import Axios from "axios";

//In index.js start off by writing a “document ready” block
//Inside the “document ready” block, define a function called renderMovies
//Make the function take one parameter called movieArray
//Write a .map() loop on the movieArray parameter -- This anonymous function should have one parameter, you can call it currentMovie
//Take the result of this .map() and save it to a variable called movieHTML


document.addEventListener('DOMContentLoaded', function () {
   function renderMovies(movieArray) {
    
    var movieHtml = movieArray.map(currentMovie => {
         return `
    <div class="card mx-2 my-3 col-2">
        <img id="poster" class="card-img-top" src="${currentMovie.Poster}">
            <div class="card-body">
                        <h5 id="movieTitle" class="d-flex card-title">${currentMovie.Title}</h5>
                        <span class="date badge badge-secondary">${currentMovie.Year}</span>
            </div>
            <div class="card-footer">
                <footer id="buttonFooter">
                <button id="addButton" class="mx-auto btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add</button>
                </footer>
            </div>
    </div>`
    }).join("");

    return movieHtml;
}
        var moviesContainer = document.getElementById('movies-container');
        var searchBar = document.getElementById('search-form')
        
        searchBar.addEventListener('submit', function(e){
            e.preventDefault();
    
            var searchString = e.target.elements[0].value.toUpperCase();

            var newArray = [];

        if (searchString !=""){
            newArray = movieData.filter(movie => {
                var movieTitle = movie.Title.toUpperCase();

                return movieTitle.includes(searchString);
            })}
            e.target.elements[0].value = "";

        moviesContainer.innerHTML = renderMovies(newArray); 
})

});

function saveToWatchlist(imdbID){
//1) saveToWatchlist has a parameter called imdbID which will tell us which movie the user clicked on. We’ll use it to sift through movieData.js to find the relevant movie information.
//2)In saveToWatchlist, create a variable called movie which will contain the rest of this movie’s data.
//3)We’ll use the Array prototype method find() to pull the rest of the movie data from data.js:  

    var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    });
//In the next line (still inside saveToWatchlist), pull down the watchlist from local storage
        var watchlistJSON = localStorage.getItem('watchlist');
//Parse the watchlist with JSON
        var watchlist = JSON.parse(watchlistJSON);
//Use an if-statement to check if the watchlist is null, If it is null, set watchlist to an empty array
        if (watchlist == null) {
            watchlist = [];
        }
//Push movie into the watchlist
        watchlist.push(movie);
//Turn the watchlist back into JSON
        watchlistJSON = JSON.stringify(watchlist);
//Save the JSONified watchlist back into local storage
        localStorage.setItem('watchlist', watchlistJSON);

       // console.log(watchlist)
}

