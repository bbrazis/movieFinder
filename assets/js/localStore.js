const addToStorage = (array,item) => {
    const filter = array.filter(movie => movie === item)[0]
    if(!filter){
        array.push(item)
        const itemToAdd = array
        localStorage.setItem('watchlist', JSON.stringify(itemToAdd))
    }
}

export { addToStorage }