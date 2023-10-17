import { url } from '/assets/js/yek.js'
import { populateListingByIndex } from '/assets/js/builders.js'

const searchForm = document.getElementById('movie-search')
const movieList = document.getElementById('movie-list')
const placeholder = document.querySelector('.main-load')

if(searchForm){
    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        try {
            const valueEl = document.getElementById('searchbar')
            if (valueEl.value){
                const res = await fetch(`${url}&s=${valueEl.value}`)
                const data = await res.json()
                movieList.innerHTML = ''
                valueEl.value = ''
                if(data.Repsonse === 400){
                    for(let item of data.Search){
                        populateListingByIndex(movieList,item.imdbID)
                    }
                } else {
                    placeholder.innerHTML = "Unable to find what you're looking for. Please try another search."
                    placeholder.classList.remove('display-none')
                }
            }
        } catch (error) {
            console.error(error)
        }
    })
}

const initializeList = async () => {
    movieList.innerHTML = ''
    placeholder.classList.add('display-none')
    try{
        const res = await fetch(`${url}&s=Pokemon`)
        const data = await res.json()
        for(let item of data.Search){
            populateListingByIndex(movieList, item.imdbID)
        }
    } catch (error) {
        console.error(error)
    }
    if (movieList.innerHTML = '') {
        placeholder.classList.remove('display-none')
    }
}

setTimeout(initializeList, 500)