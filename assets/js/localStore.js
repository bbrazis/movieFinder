const addToStorage = item => {
    const array = getWatchList()
    const itemToString = JSON.stringify(array.push(item.imdbID))
    localStorage.setItem('watchlist', itemToString)
}

const getWatchList = () => {
    return JSON.parse( localStorage.getItem('watchlist') )
}

export { addToStorage, getWatchList }