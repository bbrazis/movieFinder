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
    console.log(id)
    // const itemToRemove = watchlist.filter(movie => movie.imdbID === id)[0]
    for (let [index, movie] of array) {
        if(movie.imdbID === id){
            array.splice(index, 1)
            localStorage.setItem('watchlist', JSON.stringify(array))
        }
    }
}

export { addToStorage, removeFromStorage }