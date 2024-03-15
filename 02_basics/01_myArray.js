// array 

const myArr = [0,1,2,3,4,5]
console.log(myArr[0])

const myarr2 = new Array(1,2,3,4,5)
const myHeros = ["Mere Papa", "Mere Bhaiya", "Meri Mummy"]


// Arrays in js shallow copy banata hai 
// Shallow copy ----> same reference 
// Deep copy -------> do't share the same reference 

//Array Methods 
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)

myArr.unshift(9)  //will add element at start of array 
myArr.shift()// will remove 9

console.log(myArr.includes(9))// boolean type
console.log(myArr.includes(9)) // if not present -1


const newArr = myArr.join() // add all the elements of array into string
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


// Slice, Splice
// Difference -----> splice me original elments change ho jayenge , bache huye elelemtn bachenge bss
console.log("A", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)

