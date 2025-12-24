// defination
function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("J");
    console.log("A");
    console.log("Y");
    
}

//sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
     
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)

function addTwoNumbers(num1, num2) {
    // let r = num1 + num2
    // return r
    return num1 + num2
     
}

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result)

// when we create the defination it is called parameters and when we call the funciton it is called arguments

function loginUserMessage(username = "Sam") {
    // if(username === undefined){
    //     console.log("Please enter a username")
    //      //return `${username} just logged in`
    //      return
    // }
      if(!username){
        console.log("Please enter a username")
         //return `${username} just logged in`
         return
    }
    return `${username} just logged in`
   
}

// console.log(loginUserMessage("vijay"))
//console.log(loginUserMessage())


// next day
// here 3 dots are called rest operation it returns array of list
// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600, 700, 800))

const user = {
    username: "vijay",
    prices: 989
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const newArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200, 800, 600, 700]))