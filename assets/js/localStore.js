let watchlist = []
const watchlistFromStorage = JSON.parse( localStorage.getItem('watchlist') )

if(watchlistFromStorage){
    watchlist = watchlistFromStorage
}

const addToStorage = item => {
    const id = item.imdbID
    const itemToAdd = watchlist.push(id)
    console.log(id)
    const itemToString = JSON.stringify(itemToAdd)
    localStorage.setItem('watchlist', itemToString)
}

export { watchlist, addToStorage }