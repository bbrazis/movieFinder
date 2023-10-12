const getWatchList = () => {
    return JSON.parse( localStorage.getItem('watchlist') )
}

const addToStorage = item => {
    let array = []
    const id = item.imdbID
    array = getWatchList()
    const itemToString = JSON.stringify(array.push(id))
    localStorage.setItem('watchlist', itemToString)
}

export { addToStorage, getWatchList }