import { createElTag, createImgTag, createListing } from '/assets/js/builders.js'
import { key, url } from '/assets/js/yek.js'
import { populateByIndex } from '/assets/js/api.js'

const searchForm = document.getElementById('movie-search')
const movieList = document.getElementById('movie-list')

if(searchForm){
    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        try {
            const value = document.getElementById('searchbar').value
            const res = await fetch(`${url}&s=${value}`)
            const data = await res.json()
            movieList.innerHTML = ''
            
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

export { populateByIndex }