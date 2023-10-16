import { createElTag, createImgTag, createListing } from '/assets/js/builders.js'
import { key, url } from '/assets/js/yek.js'

const searchForm = document.getElementById('movie-search')
const movieList = document.getElementById('movie-list')

async function populateByIndex(list,id,fn) {
    const response = await fetch(`${url}&i=${id}`)
    const data = await response.json()
    fn(list, data)
}
if(searchForm){
    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        try {
            const value = document.getElementById('searchbar').value
            const res = await fetch(`${url}&s=${value}`)
            const data = await res.json()
            movieList.innerHTML = ''
            
            for(let item of data.Search){
                populateByIndex(item.imdbID)
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
    const res = await fetch(`${url}&s=Pokemon`)
    const data = await res.json()
    for(let item of data.Search){
        populateByIndex(movieList,item.imdbID,createListing)
    }
}

setTimeout(initializeList, 500)

export { populateByIndex }