
const myObj = {
    js:'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift:"swift by apple"
}
//************ForIn loop--> object pe iterate */
for (const key in myObj) {
    console.log(key)
}
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// kya for in loop array pe bhi kaam karega ?
const prog = ["js","c++", "rb", "swift", "java"]

for (const key in prog) {
    console.log(prog[key])
}


