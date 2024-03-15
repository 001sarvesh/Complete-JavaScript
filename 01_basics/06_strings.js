const name = "safar"
const repoCount = 55
// concatenate
//console.log(name+repoCount + "github")--> outdated

// string interpolation ----> modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way of declaring string 
const gameName = new String('safar_naama')//key-value pair

// methods in string 
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)// last index not included
console.log(newString)

const anotherString = gameName.slice(-9,4)// isme negative idx bhi de sakte hai 
console.log(anotherString)

const newStringOne = "     Safar   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://cricShow.%20com"
console.log(url.replace('%20','-'))

console.log(url.includes('sahime'))// ---> return false karega


const yooo = new String('safar-naama-humara - aapka - sbka')
console.log(yooo.split('-'))// based on any seprator



