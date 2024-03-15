// control flow 
// if
const isUserLoggedIn = true
const temperature = 43

if(temperature === 43){
    console.log("less than 50")
}
else{
    console.log("temperature is greater than 50")
}

const score = 183
if(score> 100){
    let power = "fly"
    console.log(`User power: ${power}`)
}
// agar power ko var se declare karenge to ye bhi run kr jayega jbki scope ko dekhte huye aisa nhi hona chahiye
// isliye let ya fir const ka use karo 
//console.log(`User power: ${power}`)


const balance = 1000;
if(balance > 100000) console.log("Yes")

if(balance < 500){
    console.log("less than")
}else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log("equal to 1000")
}


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}


