// Dates

// har ek method date ko kisi na kisi form me convert karega
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

console.log(typeof myDate);

// different methods to create date
// let myCreatedDate = new Date(2024,1,18)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-11-2024")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp)// give millisecond value
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//`${newDate.getDay()} and the time`---> String Interpolation

// to customize date more
newDate.toLocaleString('default', {
    weekDay:"long"
    
})









