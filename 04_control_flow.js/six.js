const coding = ["vk", "ms", "ro", "st"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
})
// conclusion ---> for each koi bhi value return nhi karne wala
console.log(values) // undefined output

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num> 4)
// const newNums = myNums.filter( (num) => {
//     return num>4 // filter ke nadar ye likhna hi padega
// })


// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const books = [
    {
        title: 'The Great Gatsby',
        genre: 'Fiction',
        book: 'Novel',
        edition: 1
    },
    {
        title: 'To Kill a Mockingbird',
        genre: 'Fiction',
        book: 'Novel',
        edition: 2
    },
    {
        title: '1984',
        genre: 'Dystopian',
        book: 'Novel',
        edition: 1
    },
    {
        title: 'The Catcher in the Rye',
        genre: 'Fiction',
        book: 'Novel',
        edition: 3
    },
    {
        title: 'The Hobbit',
        genre: 'Fantasy',
        book: 'Novel',
        edition: 2
    },
    {
        title: 'Pride and Prejudice',
        genre: 'Romance',
        book: 'Novel',
        edition: 1
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        genre: 'Fantasy',
        book: 'Novel',
        edition: 1
    },
    {
        title: 'The Da Vinci Code',
        genre: 'Mystery',
        book: 'Thriller',
        edition: 4
    },
    {
        title: 'The Lord of the Rings',
        genre: 'Fantasy',
        book: 'Novel',
        edition: 3
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        genre: 'Science Fiction',
        book: 'Novel',
        edition: 5
    }
];
// ab user kuch filter lagayega uske hisaab se hume output dena hai 
// const userBooks = books.filter( (bk) => bk.genre==='Fantasy')
// console.log(userBooks)


const cricketers = [
    {
        name: 'Virat Kohli',
        runsScored: 7318,
        debutYear: 2008,
        numberOfSixes: 267,
        currentYear: 2024
    },
    {
        name: 'Steve Smith',
        runsScored: 7540,
        debutYear: 2010,
        numberOfSixes: 103,
        currentYear: 2024
    },
    {
        name: 'Kane Williamson',
        runsScored: 7115,
        debutYear: 2010,
        numberOfSixes: 87,
        currentYear: 2024
    },
    {
        name: 'Joe Root',
        runsScored: 8249,
        debutYear: 2012,
        numberOfSixes: 85,
        currentYear: 2024
    },
    {
        name: 'Rohit Sharma',
        runsScored: 9115,
        debutYear: 2007,
        numberOfSixes: 376,
        currentYear: 2024
    },
    {
        name: 'David Warner',
        runsScored: 8710,
        debutYear: 2009,
        numberOfSixes: 218,
        currentYear: 2024
    },
    {
        name: 'AB de Villiers',
        runsScored: 9577,
        debutYear: 2004,
        numberOfSixes: 328,
        currentYear: 2024
    },
    {
        name: 'Kumar Sangakkara',
        runsScored: 14234,
        debutYear: 2000,
        numberOfSixes: 88,
        currentYear: 2024
    },
    {
        name: 'Chris Gayle',
        runsScored: 10535,
        debutYear: 1999,
        numberOfSixes: 534,
        currentYear: 2024
    },
    {
        name: 'Shakib Al Hasan',
        runsScored: 3869,
        debutYear: 2006,
        numberOfSixes: 124,
        currentYear: 2024
    }
];

// let legends = cricketers.filter( (cr) => cr.debutYear >= 2000)
// console.log(legends)

const cricket = cricketers.filter( (cr) => {
    return cr.runsScored >= 5000 && cr.debutYear > 2005})
console.log(cricket)
