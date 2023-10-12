const addToStorage = item => {
    const itemToString = JSON.stringify(item.imdbID)
    localStorage.addToStorage('watchlist', itemToString)
}

const getWatchList = () => {
    return JSON.parse( localStorage.getItem('watchlist') )
}

export { addToStorage, getWatchList }