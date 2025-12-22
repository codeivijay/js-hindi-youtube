 /* Objects can be declared in two ways 
 1. literals 
 2. Constructor 

 Singleton: when you create/declare from constructor it is called singleton as it unique object
 Literals: gets created many instances  //  never creates singleton
 */
// Object.create ---> this is construtor method

 // object literals

 const mySym2 = Symbol("key2") // this declaration is important for symbol

 const JsUser = {
    name: "vijay",
    age: 34,
    "full name": "Vijay Singh Diggi",
    mySym: "myKey1",
    [mySym2]: "myKey3",
    location: "Jamshedpur",
    email: "vijay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Satuarday"]
 }

//  console.log(JsUser.email) // usual way
//  console.log(JsUser["email"]) // mentos way
//  console.log(JsUser["full name"]) // because of this kind of key declaration mentos is important to access object properties
//  console.log( JsUser.mySym)
//  console.log(typeof JsUser[mySym2])

 JsUser.email = "vijay@mega.com"
 console.log(JsUser.email)
 //Object.freeze(JsUser)
 JsUser.email = "VijayVishal@megha.com"
//  console.log(JsUser.email)
//  console.log(JsUser)

 JsUser.greeting = function() {
    console.log("Hello Js User")
 }

  JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
 }

 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())