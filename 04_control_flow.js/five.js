// for each loop 

const coding = ["vk", "ms", "ro", "st"]

//syntax
// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        LanguageName: "javascript",
        LanguagefileName: "js"
    },
    {
        LanguageName: "java",
        LanguagefileName: "java"
    },
    {
        LanguageName: "python",
        LanguagefileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.LanguageName)
});