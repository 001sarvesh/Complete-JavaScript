// Objects ko declare karne ke do tareeke 
//1) literal 2) constructor

// Singleton ----> koi bhi constructor se jb aap object banate hai to ye apne tarah ka ek hi object bnta hai 


// object literals
// Symbols
const mySym = Symbol("key1")

const JsUser = {
    name: "Safar",
    "full_name": "Safar_naama", // no way to access this value from dot operator
    age:21,
    [mySym]: "mykey1", // Write syntax to use Symbol
    location:"Jaipur",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// how to access object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full_name"])
console.log(JsUser[mySym])

JsUser.email = "xyz@google.com" // to overwrite value
//Object.freeze(JsUser) // freeze kr dega
JsUser.email = "xyz@microsoft.com"
console.log(JsUser)

// Function 
JsUser.greeting = function(){
    console.log("Hello Users")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Users, ${this.name}`) // string interpolation
    //
}
console.log(JsUser.greeting) // function return back aaya hai (anonymous)
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Note --> jb bhi hum object se values access karenge to most of the time dot 
//operator hi use karenge but aise cases hote hai jaha ["email"] types use karna padta hai 













