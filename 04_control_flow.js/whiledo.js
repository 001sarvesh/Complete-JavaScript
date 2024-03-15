// let idx = 0
// while (idx <= 10) {
//     console.log(`Value of index is ${idx}`)
//     idx++
// }

// let Cricketers = ["Virat", "Rohit", "Dhoni"]
// let arr = 0
// while (arr< Cricketers.length) {
//     console.log(`Value is ${Cricketers[arr]}`)
//     arr++;
// }

// // Do While loop 

// let score =1;
// do{
//     console.log(`Score is ${score}`)
//     score++
// }while(score <= 10)

// // kaam pehle hoga condition baad me check hogi 
// let sc =11;
// do{
//     console.log(`Score is ${sc}`)
//     sc++
// }while(sc <= 10)



//*************for of loop*************************
const arr = [1,3,4,5,6,7]

for (const it of arr) {
    console.log(it) 
}

const greetings = "HelloWorld"
for (const greet of greetings) {
    //console.log(greet)
    //console.log(`Each char is ${greet}`)   
}

// Maps in js--> map is an object that hold key-value pair

const map = new Map()
map.set('IN', "INDIA")
map.set('Ban', "Banglore")
map.set('Vk', "Virat")
map.set('Ro', "Rohit")
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':- ', value) 
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// yaha object iterateable nhi hai --> four.js jao 
// for (const [key,value] of myObj) {
//     console.log(key, ':-', value)
    
// }


