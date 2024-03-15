// let myName = "Hitesh     "
// let mychannel = "chai    "

// console.log(myName.truelength)


let myHeros = ["Thor", "spiderman"]

let heroPower = {
    Thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

//heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
//heroPower.heyHitesh()



// Inheritence

const User = {
    name: "chai",
    email: "chha@gmail.com"

}
const Teacher = {
    makeVideo: false
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax Inheritence
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()