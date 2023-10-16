const addToStorage = (array,item) => {
    const filter = array.filter(movie => movie === item)[0]
    if(!filter){
        array.push(item)
        const itemToAdd = array
        localStorage.setItem('watchlist', JSON.stringify(itemToAdd))
    } else {
        alert(`Sorry, ${item.Title} is already on your Watchlist`)
    }
}

export { addToStorage }