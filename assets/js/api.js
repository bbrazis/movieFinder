import { url } from '/assets/js/yek.js'

async function populateByIndex(list,id,fn) {
    const response = await fetch(`${url}&i=${id}`)
    const data = await response.json()
    fn(list, data)
}

export { populateByIndex }