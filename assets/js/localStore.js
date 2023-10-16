const addToStorage = (array,item) => {
    const itemToAdd = array.concat([item])
    console.log(item)
    console.log(itemToAdd)
    const itemToString = JSON.stringify(itemToAdd)
    console.log(itemToString)
    localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }