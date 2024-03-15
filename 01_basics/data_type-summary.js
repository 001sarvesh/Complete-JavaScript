// # Primitive data types ---> call by value

// 7 types : String , Number, Boolean, Null, Undefined, Symbol, BigInt

// Javascript is a dynamically typed Language 
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

//const bigNumber = 3447377473773n ---> n lagane ke baad bigInt bn gya




// Reference or Non-Primitive ------> call by reference 

// Arrays , Objects, Functions

const Cricketers = ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma"]

// Object
let myObj = {
    name : "Safar_Namma23",
    age: 16,

}

// function ko aap variable ki tarah treat kr sakte ho 
const myFunction = function(){
    console.log("Hello Bharat");
}    


// Data type pta karna ----?
// console.log(typeof bigNumber)
// console.log(typeof outSideTemp) // null ka datatype object
// console.log(typeof scoreValue)

// console.log(typeof myFunction) // but called objectFunction





//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive) ---> jo bhi variable declare kiya hai uska copy milte hai 

// Heap Memory(Non-Primitve) --> reference milta hai 

let myInstaName = "Safar"

let anotherName = "ChaiAurCode"

console.log(myInstaName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "himmati@google.com"
console.log(userOne.email)
console.log(userTwo.email)




