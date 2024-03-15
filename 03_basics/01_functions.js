// function ka mtlb hai ek baar code likh diya kitna bhi bada 
// usko ek package me band kr diya hai wo package aap jaha chahe use kr sakte hai

// function addTwoNum(num1, num2){// at the time of function definition --> parameters 
//     console.log(num1+num2);
// }
//  const res = addTwoNum(445,43)// at the time of function call ---> arguements
//  console.log("Result : ", res)


function Multiplynum(num1, num2){
    let result= num1*num2;
    //console.log("safar") // kbhi bhi execute nhi hoga
    return result;
}
const result =  Multiplynum(4,5)
console.log("Result : ", result)


function loginUserMsg(username ="sam"){
    if(username == undefined){ // (!username)
        console.log("Please Enter UserName")
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMsg("Safar"))
//console.log(loginUserMsg("Lakshay"))


// Shopping Cart
function calculateCartPrice(num1){
    return num1
}
console.log()

