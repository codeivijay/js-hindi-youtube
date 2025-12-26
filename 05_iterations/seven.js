const myNumbers = [1, 2, 3, 4, 5, 7, 9]

const newNumbs = myNumbers.map( (num) => { return num + 10} )

const newNumber = []

myNumbers.forEach(  (num) => newNumber.push(num + 10) )

//console.log(newNumber)

const newNmm = myNumbers
        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >= 50)

console.log(newNmm)