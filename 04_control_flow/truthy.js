const userEmail = "Vijay@gmail.com"

if(!userEmail) {
    console.log(`Got User email: ${userEmail}`)
}
else {
    console.log("Don't have a user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0"

// const username = [] 
// if (username.length === 0) {
//     console.log("username is empty")
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
// val1 = null ?? 20 ?? 10

//console.log(val1)

// Terniary Operator ==> condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

