const myNumbs = [1, 2, 3]

const myTotal = myNumbs.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal ${currVal}`)
    return acc + currVal
}, 0)
//console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Mobile dev",
        price: 3999
    },
    {
        itemName: "Data Science",
        price: 5999
    },
    {
        itemName: "Full Stack",
        price: 6999
    },
    {
        itemName: "Flutter",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    console.log(`Acc value is: ${acc} and item price is: ${item.price}`)
    return acc + item.price} , 0 )

console.log(priceToPay)