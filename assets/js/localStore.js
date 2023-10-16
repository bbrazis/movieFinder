const addToStorage = (array,item) => {
    if(!array.includes(item)){
        array.push([item])
        const itemToAdd = array
        localStorage.setItem('watchlist', JSON.stringify(itemToAdd))
    }
}

export { addToStorage }