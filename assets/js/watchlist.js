import { createWatchlist, watchlist } from '/assets/js/builders.js'
import { key, url } from '/assets/js/yek.js'

const movieList = document.getElementById('movie-list')

async function populateByIndex(list,id,fn) {
    const response = await fetch(`${url}&i=${id}`)
    const data = await response.json()
    fn(list, data)
}

const initializeWatchList = () => {
    movieList.innerHTML = ''
    const placeholder = document.querySelector('.main-load')
    placeholder.classList.add('display-none')
    
    for(let movie of watchlist){
        populateByIndex(movieList, movie.imdbID, createWatchlist)
    }
}

initializeWatchList()

export { initializeWatchList }