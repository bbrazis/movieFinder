import { url } from '/assets/js/yek.js'
import { createListing, createWatchlist } from '/assets/js/builders.js'

async function populateListingByIndex(list,id) {
    const response = await fetch(`${url}&i=${id}`)
    const data = await response.json()
    createListing(list, data)
}

async function populateWatchlistByIndex(list,id) {
    const response = await fetch(`${url}&i=${id}`)
    const data = await response.json()
    createWatchlist(list, data)
}

export { populateListingByIndex, populateWatchlistByIndex }