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

const removeFromStorage = (array) => {
    const id = this.target.id
    // const itemToRemove = watchlist.filter(movie => movie.imdbID === id)[0]
    for (let [index, movie] of array.entries) {
        if(movie.imdbID === id){
            array.splice(index, 1)
            localStorage.setItem('watchlist', JSON.stringify(array))
        }
    }
}

export { addToStorage, removeFromStorage }