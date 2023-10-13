let watchlist = []
const watchlistFromStorage = JSON.parse( localStorage.getItem('watchlist') )

if(watchlistFromStorage){
    watchlist = watchlistFromStorage
}

const addToStorage = (array,item) => {
    const id = item.imdbID
    const itemToAdd = array.push(id)
    console.log(id)
    console.log(itemToAdd)
    const itemToString = JSON.stringify(itemToAdd)
    console.log(itemToString)
    localStorage.setItem('watchlist', itemToString)
}

export { watchlist, addToStorage }