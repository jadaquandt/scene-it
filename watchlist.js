document.addEventListener('DOMContentLoaded', function () {
    var getWatchlist = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(getWatchlist);

    function renderWatchlist(movieArray) {
     
     var watchlistHtml = movieArray.map(currentMovie => {
          return `
     <div class="card mx-2 my-3 col-2">
         <img id="poster" class="card-img-top" src="${currentMovie.Poster}">
             <div class="card-body">
                         <h5 id="movieTitle" class="d-flex card-title">${currentMovie.Title}</h5>
                         <span class="date badge badge-secondary">${currentMovie.Year}</span>
             </div>
             <div class="card-footer">
                 <!--<footer id="buttonFooter">
                 <button id="addButton" class="mx-auto btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add</button>
                 </footer>-->
             </div>
     </div>`
     }).join("");
    
    return watchlistHtml;
    
 } 
    //If I run it like this: I get the error watchlistHtml is not defined
    //renderWatchlist(watchlist);
    //If I run it like this, I get the error: Cannot read property 'map' of undefined
   //renderWatchlist();
    //console.log(watchlistHtml) 
    var moviesContainer = document.getElementById('watchlist-container');
    moviesContainer.innerHTML = renderWatchlist(watchlist); 
 });

 /*Part 3 Below */
 /*

    var moviesContainer = document.getElementById('movies-container');
    //var searchBar = document.getElementById('search-form')//
    var searchString = document.getElementById('search-value').value;

    searchString.addEventListener('submit', function(e){
//Create another variable called urlEncodedSearchString. Set it equal to encodeURIComponent()..In the same line, pass in searchString as the parameter. You should end up with a line like: var urlEncodedSearchString = encodeURIComponent(searchString);//
    var urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get('http://www.omdbapi.com/?apikey=99388fdd&s=' + urlEncodedSearchString)
        .then(function(response){
            console.log(response.data);
            movieHtml = renderMovies(response.data.Search);
            moviesContainer.innerHTML = movieHTML;
    })


    var newArray = [];

if (searchString !=""){
    newArray = movieData.filter(movie => {
        var movieTitle = movie.Title.toUpperCase();

        return movieTitle.includes(searchString);
    })}
   // e.target.elements[0].value = "";

// moviesContainer.innerHTML = renderMovies(newArray); //
}) */