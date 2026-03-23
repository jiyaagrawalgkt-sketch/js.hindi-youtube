//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol,
//  BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 345678965435677543589n// become bigInt by adding n in last

//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naargraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// **************************************************

// Stack (Primitive), Heap (Non-Primitive)

// Stack memory give always copy so real not change.
// Heap memory give always reference so real change.

let myYoutubename = "hiteshchoudhaydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);// not change
console.log(anotherName);// value change

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usrTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

