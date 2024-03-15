// Global scope
//let a = 300

// block scope
if(true){
    let a = 10
    const b = 20
    //var c =30
    //console.log("INNER :", a)
}

//console.log(a)
//console.log(b)
//console.log(c)

//nested scope
function one(){
    const username = "Hitesh sir"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}
//one()

if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)



//+++++++++++++++Interesting++++++++++++++++++++++++

function addOne(num){
    return num+1;
}
//addOne(5)

// hoisting --> function declaration se pehle usko use nhi kr sakte
addTwo(5)
const addTwo = function(num){
    return num+2
}
//addTwo(5)