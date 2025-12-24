//var c = 300
let a = 300

if(true) {
let a = 10
const b = 20
//console.log("Inner ", a)
}
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */


//console.log(a)
//console.log(b)

// nested scopes

function one() {
    const username = "vijay"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

//one()

if (true) {
    const username = "vijay"
    if(username === "vijay") {
        const website = "youtube"
        //console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

// ++++++++++++++++ interesting ++++++++++++
console.log(addOne(5))

function addOne(num) {
    return num + 1
}



// this is sometimes called expression, when you declare a function and also hold the function in a variable and then try to access that before that line it will throw error

console.log(addTwo(5))
const addTwo = function(num) {
    return num + 2
}

