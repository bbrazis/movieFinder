import { url } from '/assets/js/yek.js'
import { populateListingByIndex } from '/assets/js/builders.js'

const searchForm = document.getElementById('movie-search')
const movieList = document.getElementById('movie-list')
const placeholder = document.querySelector('.main-load')
const loader = document.querySelector('.loader-wrapper')

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
                placeholder.classList.add('display-none')
                loader.classList.remove('display-none')
                setTimeout(async function() {
                    if(data.Response === "True"){
                    placeholder.classList.add('display-none')
                    loader.classList.add('display-none')
                    for(let item of data.Search){
                        populateListingByIndex(movieList,item.imdbID)
                    }
                } else {
                    loader.classList.add('display-none')
                    placeholder.innerHTML = "Unable to find what you're looking for. Please try another search."
                    placeholder.classList.remove('display-none')
                }
                }, 1000)
                
            }
        } catch (error) {
            console.error(error)
        }
    })
}

const initializeList = async () => {
    try{
        const res = await fetch(`${url}&s=Pokemon`)
        const data = await res.json()
        if(data.Response === 'True'){
            movieList.innerHTML = ''
            placeholder.classList.add('display-none')
            for(let item of data.Search){
                populateListingByIndex(movieList, item.imdbID)
            }
        }
    } catch (error) {
        console.error(error)
    }
}

// setTimeout(initializeList, 500)
