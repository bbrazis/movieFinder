const addToStorage = (array,item) => {
    array.push([item])
    const itemToAdd = array
    const itemToString = JSON.stringify(itemToAdd)
    console.log(itemToString)
    localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }