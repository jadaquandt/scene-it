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
    <div class="card mx-2 my-3 col-lg-2 col-md-2 col-sm-4">
        <img id="poster" class="card-img-top" src="${currentMovie.Poster}">
            <div class="card-body">
                        <h5 id="movieTitle" class="d-flex card-title">${currentMovie.Title}</h5>
                        <span class="date badge badge-dark">${currentMovie.Year}</span>
            </div>
            <div class="card-footer">
                <button id="addButton" type="button" class="mx-auto btn btn-dark btn-sm" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</button>
            </div>
    </div>`
    }).join("");

    return movieHtml;
}       
        
        var moviesContainer = document.getElementById('movies-container');
        var searchBar = document.getElementById('search-form');
        
        searchBar.addEventListener('submit', function(e){
            e.preventDefault();
    
            var searchString = document.getElementById('search-value').value;
            //Create another variable called urlEncodedSearchString. Set it equal to encodeURIComponent()..In the same line, pass in searchString as the parameter. You should end up with a line like: var urlEncodedSearchString = encodeURIComponent(searchString);//
            var urlEncodedSearchString = encodeURIComponent(searchString);

            axios.get('http://www.omdbapi.com/?apikey=99388fdd&s=' + urlEncodedSearchString)
                .then(function(response){

                    var movieHtml = renderMovies(response.data.Search);
                    moviesData = response.data.Search;
                    moviesContainer.innerHTML = movieHtml;
                })
})

});

let button = document.getElementById("addButton");
let moviesData;

function saveToWatchlist(imdbID){
//1) saveToWatchlist has a parameter called imdbID which will tell us which movie the user clicked on. We’ll use it to sift through movieData.js to find the relevant movie information.
//2)In saveToWatchlist, create a variable called movie which will contain the rest of this movie’s data.
//3)We’ll use the Array prototype method find() to pull the rest of the movie data from data.js:  

    var movie = moviesData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    });
//In the next line (still inside saveToWatchlist), pull down the watchlist from local storage
        var watchlistJSON = localStorage.getItem('fixedWatchlist');
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
        localStorage.setItem('fixedWatchlist', watchlistJSON);

      console.log(watchlist)
}
