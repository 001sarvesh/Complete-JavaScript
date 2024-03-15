// iife --> jaise hi aapne function likha usko immediately invoked karwana hai 
// but why? jb file me sirf database connection ho 
// global scope ke pollution se problem hoti hai kayi baar to uss 
// global scope ke jo variables hai ya jo bhi waha declaration hai 
// uske pollution ko hatane ke liye IIFE ka use kiya 

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();
// IIFE function ko pta nhi hota invoked hone ke baad ki 
// khtm kaha karna hai to uske liye semicolon lagana zaroori

// ; lagane ke baad ye bhi chal jayega 
// Unnamed IIFE
// ( () =>{
//     console.log(`DB CONNECTED TWO`); 
// })()

//
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Shukla')


// Javascript execution context 
// 1) global execution context 
// 2) function execution context
// 3) eval execution context

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(13,5)
 
// Steps for this above code 
// 1) global execution --> this
// 2) Memory Phase --> val1, val2(undefined jayega) 
// addNum--->definition
// result1 ----> undefined
// result2 ----> undefined
//3) Execution Phase
// val1 --> 13
// val2 ----> 5
//addNum()---> new executional context bnta hai ---> kaam hone ke baad delete bhi hota hai 

// Last me total return ho jayega global execution context me 
