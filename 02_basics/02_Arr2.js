// Array 

const Cricket_Heros = ["Virat Kohli", "Ms Dhoni" , "Sachin Tendulkar", "Rohit Sharma"]
const ipl_Heros = ["ABD", "Gayle", "Vk18"]

Cricket_Heros.push(ipl_Heros)
console.log(Cricket_Heros) // Array of Array bn jayega 
console.log(Cricket_Heros[3])
console.log(Cricket_Heros[3][1])

const All_heros = Cricket_Heros.concat(ipl_Heros)
console.log(All_heros)


// more easy to use than concat --> called as spread operator
const all_new_Heros = [...Cricket_Heros, ...ipl_Heros]
console.log(all_new_Heros)

const another_Array = [1,2,3,[4,5,6,],7, [6,7,[4,5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array)// saare ko ek me ho kr dega


console.log(Array.isArray("Safar"))
console.log(Array.from("Safar")) // Array bna dega
console.log(Array.from({name: "Safar"}))// empty array dega----> Interesting

let score1 = 100
let score2 = 200
let score3 =300
console.log(Array.of(score1,score2,score3))









