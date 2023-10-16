const addToStorage = (array,item) => {
    const filter = array.filter(movie => movie.Title === item.Title)[0]
    if(!array.includes(filter)){
        array.push(item)
        localStorage.setItem('watchlist', JSON.stringify(array))
    } else {
        alert(`Sorry, ${item.Title} is already on your Watchlist`)
    }
}

const removeFromStorage = (array, id) => {
    const itemToRemove = array.filter(movie => movie.imdbID === id)[0]
    const index = array.indexOf(itemToRemove)
    array.splice(index,1)
    localStorage.setItem('watchlist', JSON.stringify(array))
}

export { addToStorage, removeFromStorage }