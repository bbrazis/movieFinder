const addToStorage = (array,item) => {
    // const id = item.imdbID
    const itemToAdd = array.push(item)
    console.log(item)
    console.log(itemToAdd)
    const itemToString = JSON.stringify({name: 'name'})
    console.log(itemToString)
    // localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }