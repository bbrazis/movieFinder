const addToStorage = (array,item) => {
    // const id = item.imdbID
    const index = array.length + 1

    const itemToAdd = array.push(index, item)
    console.log(item)
    console.log(itemToAdd)
    const itemToString = JSON.stringify({name: 'name'})
    console.log(itemToString)
    // localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }