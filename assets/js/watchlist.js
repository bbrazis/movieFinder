import { createWatchlist } from '/assets/js/builders.js'
import { populateByIndex } from '/assets/js/api.js'

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
        populateByIndex(movieList, movie.imdbID, createWatchlist)
    }

    if(watchlist.length < 1) {
        placeholder.classList.remove('display-none')
    }
}

initializeWatchList()

export { watchlist, initializeWatchList }