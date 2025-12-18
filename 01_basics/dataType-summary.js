// # Primitive datatype

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

// # Reference type / non-primitive

// Objects, Array, Functions

// Symbol

/* const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
console.log(typeof id)
console.log(id)
console.log(anotherId) */

const heros = ["shaktiman", "Nagraaj", "Doga"]
let myObj = {
    name: "vijay",
    age : 30,
}

const myFunction = function() {
console.log("hello World")
}


// ************* Memory *********

// Stack (Primitive datatype) one get copy, Heap(Non-Primitive) gets reference of location

let myYoutubename = "thebookishlog"
let anotherName = myYoutubename

anotherName = "chaiaurcode"
console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: "user@gmail.com",
    upi: "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "vijay@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
