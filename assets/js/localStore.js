const addToStorage = (array,item) => {
    const filter = array.filter(movie => movie.Title === item.Title)[0]
    if(!array.includes(filter)){
        array.push(item)
        const itemToAdd = array
        localStorage.setItem('watchlist', JSON.stringify(itemToAdd))
    } else {
        alert(`Sorry, ${item.Title} is already on your Watchlist`)
    }
}

const removeFromStorage = (array, id) => {
    const itemToRemove = array.filter(movie => movie.imdbID === id)[0]
    const index = array.indexOf(itemToRemove)
    array.splice(index,1)
}

export { addToStorage, removeFromStorage }