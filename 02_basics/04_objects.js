// 2) singleton and constrcutor ki help se object banana

//const tinderUser = new Object() // singleton object
const tinderUser = {} //non sigleton object
tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName:{
            firstName: "Sammy",
            lastname: "Shukla"
        }
    }
}
// objects ke andar objects ko access karne ka tareeka 
console.log(regularUser.fullName.userfullName.firstName)
//console.log(regularUser.fullName?.userfullName.firstName)

// to combine two objects
const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj3 = {5: "a", 6: "b"}

//const obj3 = {Obj1, Obj2} wrong way to combine
//const obj3 = Object.assign({}, Obj1, Obj2);// correct way to combine
//const obj3 = Object.assign(Obj1, Obj2, Obj3) //one more way to combine

const obj4 = {...Obj1,...Obj2,...Obj3} // frequently Used
console.log(obj4)


// jb database se values aayenge 
const users = [
    {
        id : 1,
        email: "shsha@gmail.com",
    },
    {
        id:1,
        email: "fjfkd@gmail.com",
    },
    {

    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // IMPORTANT
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))


// De-Structuring of Objects
const course = {
    courseName : "Javascript",
    price: "999",
    instructor: "Hitesh Sir"
}
//one way to access
//course.instructor

//other way 
const {instructor} = course
console.log(instructor)
const {instructor: ins} = course
console.log(ins)

//some methods ---> react thoda sa 
// const navbar = ({company}) => { // destructuring ki ja rhi

// }
// navbar(company = "Hitesh")


//Note--> sirf object ko hi nhi array ko bhi destructure kiya jata hai , but rarely 
// API--> Apna kaam kisi aur ko sar pe daal dena hai 
// APIs me aapke paas kuch values aati hai backend se unn values ko kaise aap likhthe hai 
// pehle values aati thi Xml structure me 
//ab values aati hai JSON me---> Json Object hi hai but without name

//Note --> Json me keys bhi usually string hoti hai aur values bhi
// {
//     "name": "Anish",
//     "courseName": "Javascript",
//     "price": "free",

// }

// kayi baar aapko api's array ke format me aapko milti hai



