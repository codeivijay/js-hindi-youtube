// arrow function, this keyword, "this" talks about current context 

//when we talk about dynamically access object function
const user = {
    username: "vijay",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this)
        
    }
}
// user.welcomeMessage()
// user.username = "kajal"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "vijay"
//     console.log(this.username)
// }

// chai()

// In expression way also we can't use this keyword

// const chai = function () {
//     let username = "vijay"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "vijay"
    console.log(this.username)
    console.log(this)
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5))

const addTwo = (num1, num2) =>  num1 + num2 // this is called implicit return
const addThree = (num1, num2) =>  (num1 + num2 ) // we don't have to use return
const addFour = (num1, num2) =>  ({username: "vijay"}) // to return an object in the function we have to wrap them in parenthesis it is must or else we won't be  able to return object

console.log(addTwo(3, 5))
console.log(addThree(3, 5))
console.log(addFour(3, 5))

const myArray = [2, 4, 5, 6, 7]

// myArray.forEach(function () {})
// myArray.forEach( () => {})