import { populateWatchlistByIndex } from '/assets/js/builders.js'

let movieList = ''

if(document.getElementById('watchlist')){
    movieList = document.getElementById('watchlist')
} else {
    movieList = document.getElementById('movie-list')
}

let watchlist = []
const watchlistFromStorage = JSON.parse( localStorage.getItem('watchlist') )

if(watchlistFromStorage){
    watchlist = watchlistFromStorage
}

const initializeWatchList = () => {
    movieList.innerHTML = ''
    const placeholder = document.querySelector('.main-load')
    placeholder.classList.add('display-none')
    
    for(let movie of watchlist){
        populateWatchlistByIndex(movieList, movie.imdbID)
    }

    if(watchlist.length < 1) {
        placeholder.classList.remove('display-none')
    }
}

if(!document.getElementById('searchbar')){
    initializeWatchList()
}

export { watchlist, initializeWatchList }