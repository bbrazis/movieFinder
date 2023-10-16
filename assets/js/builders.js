import { addToStorage, removeFromStorage } from '/assets/js/localStore.js'
import { watchlist, initializeWatchList } from '/assets/js/watchlist.js'

// let watchlist = []
// const watchlistFromStorage = JSON.parse( localStorage.getItem('watchlist') )

// if(watchlistFromStorage){
//     watchlist = watchlistFromStorage
// }

function createElTag(tagName, tagClass, tagText) {
    const myElement = document.createElement(tagName)
    myElement.classList = tagClass
    myElement.textContent = tagText  
    return myElement
}

function createImgTag(tagClass, tagAlt, tagSrc){
  const myImage = document.createElement("img")
  myImage.classList = tagClass
  myImage.src = tagSrc
  myImage.alt = tagAlt
  
  return myImage
}

function createListing(ul, item) {
    const li = createElTag('li','','')
    const moviePosterUrl = item.Poster === 'N/A' ? '/assets/images/placeholder-img.jpg' : `${item.Poster}`
    const movieDesc = item.Plot === 'N/A' ? 'No plot for this title' : `${item.Plot}`
    const movieImg = createImgTag('',`${item.Title} poster`,`${moviePosterUrl}`)
    const parentDiv = createElTag('div','movie-details','')
    const titleDiv = createElTag('div','movie-title','')
    const h2 = createElTag('h2','',`${item.Title}`)
    const starIcon = createElTag('i','fa-solid fa-star','')
    const rating = createElTag('p','',`${item.imdbRating}`)
    const statDiv = createElTag('div','movie-stat-wrapper','')
    const duration = createElTag('p','',`${item.Runtime}`)
    const themes = createElTag('p','',`${item.Genre}`)
    const addBtn = createElTag('button','','')
    const plusIcon = createElTag('i','fa-solid fa-circle-plus','')
    const hiddenSpan = createElTag('span','visually-hidden','Add to ')
    const description = createElTag('p','movie-description',`${movieDesc}`)
    
    titleDiv.append(h2,starIcon,rating)
    addBtn.append(plusIcon,hiddenSpan,'Watchlist')
    addBtn.id = `${item.imdbID}`
    addBtn.addEventListener('click', function(e){
        addToStorage(watchlist,item)
    })
    statDiv.append(duration,themes,addBtn)
    parentDiv.append(titleDiv,statDiv,description)
    li.append(movieImg,parentDiv)
    ul.append(li)
}

function createWatchlist(ul, item) {
    const li = createElTag('li','','')
    const moviePosterUrl = item.Poster === 'N/A' ? '/assets/images/placeholder-img.jpg' : `${item.Poster}`
    const movieDesc = item.Plot === 'N/A' ? 'No plot for this title' : `${item.Plot}`
    const movieImg = createImgTag('',`${item.Title} poster`,`${moviePosterUrl}`)
    const parentDiv = createElTag('div','movie-details','')
    const titleDiv = createElTag('div','movie-title','')
    const h2 = createElTag('h2','',`${item.Title}`)
    const starIcon = createElTag('i','fa-solid fa-star','')
    const rating = createElTag('p','',`${item.imdbRating}`)
    const statDiv = createElTag('div','movie-stat-wrapper','')
    const duration = createElTag('p','',`${item.Runtime}`)
    const themes = createElTag('p','',`${item.Genre}`)
    const removeBtn = createElTag('button','','')
    const minusIcon = createElTag('i','fa-solid fa-circle-minus','')
    const hiddenSpan = createElTag('span','visually-hidden',' from watchlist')
    const description = createElTag('p','movie-description',`${movieDesc}`)
    
    titleDiv.append(h2,starIcon,rating)
    removeBtn.append(minusIcon,'Remove',hiddenSpan)
    removeBtn.id = `${item.imdbID}`
    removeBtn.addEventListener('click', function(e) {
        const id = e.target.id
        removeFromStorage(watchlist, id)
        initializeWatchList()
    })
    statDiv.append(duration,themes,removeBtn)
    parentDiv.append(titleDiv,statDiv,description)
    li.append(movieImg,parentDiv)
    ul.append(li)
}

export { createElTag, createImgTag, createListing, createWatchlist, watchlist }