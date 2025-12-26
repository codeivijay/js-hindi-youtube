// forEach ==> array specific loops

// [{}, {}, {}]

const arr = [1, 3, 5, 8, 9]

for (const num of arr) {
    //console.log(num)
}

const gift = "Hello world"

for (const gifting of gift) {
    //console.log(`Each char is ${gifting}`)
}

// Maps

const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ':-', value)
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }