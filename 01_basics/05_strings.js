const name ="vijay"
const repoCount = 50

//console.log(name + repoCount)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('vijay-HC-coma')
//console.log(gameName[0])
//console.log(gameName.__proto__)
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName)
//console.log(gameName.charAt(3))
//console.log(gameName.indexOf('i'))
const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-7, 3)
//console.log(anotherString)

const newStringOne = "     vijay    "
//console.log(newStringOne)
//console.log(newStringOne.trim())
/* console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd()) */
const url = "https://vijay.com/vijay%20diggi"
console.log(url.replace("%20", "-"))
console.log(url.includes("sunder"))
console.log(gameName.split("-"))
const knowHow = gameName.split("-")
console.log(knowHow)
console.log(typeof(knowHow))

