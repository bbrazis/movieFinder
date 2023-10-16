const addToStorage = (array,item) => {
    // const id = item.imdbID
    const index = array.length + 1
    const obj = {item}
    const itemToAdd = array.push(JSON.stringify(obj))
    console.log(item)
    console.log(itemToAdd)
    const itemToString = JSON.parse(itemToAdd)
    console.log(itemToString)
    // localStorage.setItem('watchlist', itemToString)
}

export { addToStorage }