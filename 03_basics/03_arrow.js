const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        // this --> current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai();

// const chai = function(){
    //     let username = "hitesh"
    //     console.log(this.username)
    // }
    
// declaring function through arrow function 
const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}

//() => {} -----> arrow function syntax 
// we can hold this arrow function in a variable
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

//implicit
//const addTwo = (num1,num2) => num1 + num2

//yaha return likhne ki zaroorat nhi 
//const addTwo = (num1,num2) => (num1 + num2)

// object ko return karne ke liye {} lagana hi padega
const addTwo = (num1,num2) => ({username:"hitesh"})

console.log(addTwo(3,5))

