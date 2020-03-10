document.addEventListener('DOMContentLoaded', function () {
    var getWatchlist = localStorage.getItem('fixedWatchlist');
    var newWatchlist = JSON.parse(getWatchlist);
    console.log(newWatchlist)
    function renderWatchlist(movieArray) {
     
     var watchlistHtml = movieArray.map(watchlistMovie => {
          return `
     <div class="card mx-2 my-3 col-2">
         <img id="poster" class="card-img-top" src="${watchlistMovie.Poster}">
             <div class="card-body">
                         <h5 id="movieTitle" class="d-flex card-title">${watchlistMovie.Title}</h5>
                         <span class="date badge badge-secondary">${watchlistMovie.Year}</span>
             </div>
     </div>`
     }).join("");
    
    return watchlistHtml;
    
 } 

    var watchlistContainer = document.getElementById('watchlist-container');
    watchlistContainer.innerHTML = renderWatchlist(newWatchlist); 
 });

 