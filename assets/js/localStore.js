let watchlist = []
const watchlistFromStorage = JSON.parse( localStorage.getItem('watchlist') )

if(watchlistFromStorage){
    watchlist = watchlistFromStorage
}

const addToStorage = item => {
    const id = item.imdbID
    console.log(watchlist)
    console.log(id)
    const itemToString = JSON.stringify(watchlist.push(id))
    localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }