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
                <footer id="buttonFooter"><button class="mx-auto btn btn-primary">Add</button></footer>
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


