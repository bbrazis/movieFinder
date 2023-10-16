const addToStorage = (array,item) => {
    array = array.concat([item])
    const itemToAdd = array
    console.log(itemToAdd)
    const itemToString = JSON.stringify(itemToAdd)
    console.log(itemToString)
    localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }