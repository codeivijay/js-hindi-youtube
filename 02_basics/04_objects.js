// singleton by constructor

//const tinderUser = new Object() // singleton
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "vinay"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "vijay",
            lastName: "diggi"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

// console.log(regularUser.fullName?.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = {obj1, obj2}
//console.log(obj3);
//const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

// when values comes from database

const users = [
    {
        id: 1,
        email: "vijay@gmail.com"
    },
    {
        id:2,
        email: "goman@gmail.com"
    },
   {
        
    },
    {
        
    } 
]

users[1].email
//console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.values(tinderUser).length)
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // here isLoggedIn is written within single quote because objects save its properties as strings behind the scene and string are always enclosed within quotes



