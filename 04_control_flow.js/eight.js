const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator, currentVal) {
//     console.log(`accumulator: ${accumulator} and currentVal ${currentVal}`);
//     return accumulator+currentVal
// }, 3) // accumulator ko jo bhi value comma ke baad dete hai wo aati hai 
// console.log(myTotal)


//Using arrow function 
// const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "MobileD course",
        price: 3999
    },
    {
        itemName: "AppD course",
        price: 3999
    },
    {
        itemName: "DSA course",
        price: 4999
    },
]
//ab hume shoppingCart ke andar jitne prices hai unko add karna hai 
const pricetoPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(pricetoPay)