document.addEventListener('DOMContentLoaded', function () {
    localStorage.getItem(`watchlist`);
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
                 <footer id="buttonFooter">
                 <button id="addButton" class="mx-auto btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add</button>
                 </footer>
             </div>
     </div>`
     }).join("");
 
     return watchlistHtml;
 }
    //If I run it like this: I get the error movieArray.map is not a function
    //renderWatchlist(localStorage.getItem(`watchlist`));
    //If I run it like this, I get the error: Cannot read property 'map' of undefined
   //renderWatchlist();
    console.log(localStorage.getItem(`watchlist`))  
 });
