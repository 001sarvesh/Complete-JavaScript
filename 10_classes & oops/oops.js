const user = {
    userName: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.userName}`)
        console.log(this)
    }
}
// console.log(user.userName)
//console.log(user.getUserDetails())
// console.log(this)



function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount; // Fix: Assign loginCount parameter to loginCount property
    this.isLoggedIn = isLoggedIn;

    // return this; // Note: The "return this" statement is not necessary in a constructor function
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne);
console.log(userTwo);

