import { watchlist } from "assets/js/builders.js"

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

const removeFromStorage = () => {
    const id = e.target.id
    // const itemToRemove = watchlist.filter(movie => movie.imdbID === id)[0]
    for (let [index, movie] of watchlis.entries) {
        if(movie.imdbID === id){
            watchlist.splice(index, 1)
            localStorage.setItem('watchlist', JSON.stringify(watchlist))
        }
    }
}

export { addToStorage, removeFromStorage }