import { populateByIndex } from '/assets/js/index.js'
import { createWatchlist } from '/assets/js/builders.js'
import { key, url } from '/assets/js/yek.js'

const movieList = document.getElementById('movie-list')

const initializeList = async () => {
    movieList.innerHTML = ''
    const placeholder = document.querySelector('.main-load')
    placeholder.classList.add('display-none')
    
    for(let item of watchlist){
        populateByIndex(item.imdbID)
    }
}

initializeList()