// Dates

let myDate = new Date()
/* console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleDateString('en-IN'))
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString('en-IN'))
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleTimeString('en-IN'))
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(typeof myDate) */

let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString())
let myTimeStamp = Date.now()

/* console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) */
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

let demo = newDate.toLocaleString('default', {
weekday: "long",
hour: "2-digit"
})
console.log(demo)