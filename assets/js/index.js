import { createListing } from '/assets/js/builders.js'
import { url } from '/assets/js/yek.js'
import { populateByIndex } from '/assets/js/api.js'

const searchForm = document.getElementById('movie-search')
const movieList = document.getElementById('movie-list')

if(searchForm){
    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        try {
            const valueEl = document.getElementById('searchbar')
            const res = await fetch(`${url}&s=${valueEl.value}`)
            const data = await res.json()
            movieList.innerHTML = ''
            valueEl.value = ''
            for(let item of data.Search){
                populateByIndex(movieList,item.imdbID,createListing)
            }
            
        } catch (error) {
            console.error(error)
        }
    })
}

const initializeList = async () => {
    movieList.innerHTML = ''
    const placeholder = document.querySelector('.main-load')
    placeholder.classList.add('display-none')
    try{
        const res = await fetch(`${url}&s=Pokemon`)
        const data = await res.json()
        for(let item of data.Search){
            populateByIndex(movieList,item.imdbID,createListing)
        }
    } catch (error) {
        console.error(error)
    }
    if (movieList.innerHTML = '') {
        placeholder.classList.remove('display-none')
    }
}

setTimeout(initializeList, 500)