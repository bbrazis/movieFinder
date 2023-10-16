import { createWatchlist, watchlist } from '/assets/js/builders.js'
import { populateByIndex } from '/assets/js/api.js'

const movieList = document.getElementById('movie-list')

let myWatchList = watchlist

const initializeWatchList = () => {
    movieList.innerHTML = ''
    const placeholder = document.querySelector('.main-load')
    placeholder.classList.add('display-none')
    
    for(let movie of myWatchList){
        populateByIndex(movieList, movie.imdbID, createWatchlist)
    }

    if(watchlist.length < 1) {
        placeholder.classList.remove('display-none')
    }
}

initializeWatchList()

export { initializeWatchList }