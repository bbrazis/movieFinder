import { addToStorage } from '/assets/js/localStore.js'

const fakeData = {
    Title: "The Dark Knight", 
    Year: "2008", 
    Rated: "PG-13", 
    Released: "18 Jul 2008", 
    Runtime: "152 min", 
    Genre: "Action, Crime, Drama", 
    Director: "Christopher Nolan", 
    Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer", 
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart", 
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
    Language: "English, Mandarin", 
    Country: "United States, United Kingdom", 
    Awards: "Won 2 Oscars. 162 wins & 164 nominations total", 
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", 
    Ratings: [
        {Source: "Internet Movie Database", Value: "9.0/10"}, 
        {Source: "Rotten Tomatoes", Value: "94%"}, 
        {Source: "Metacritic", Value: "84/100"}], 
    Metascore: "84", 
    imdbRating: "9.0", 
    imdbVotes: "2,786,837", 
    imdbID: "tt0468569", 
    Type: "movie", 
    DVD: "14 Jun 2010", 
    BoxOffice: "$534,987,076", 
    Production: "N/A", 
    Website: "N/A", 
    Response: "True"
}

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
        addToStorage(item)
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
    statDiv.append(duration,themes,removeBtn)
    parentDiv.append(titleDiv,statDiv,description)
    li.append(movieImg,parentDiv)
    ul.append(li)
}

export { createElTag, createImgTag, createListing, createWatchlist }