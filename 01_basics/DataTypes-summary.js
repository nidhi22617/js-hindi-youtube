// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);


const bigNumber = 3535355353535545n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
{
    name: "hitesh" 
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)




// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

