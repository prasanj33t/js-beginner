// Primitive 

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3 // both represents number

// const isLoggedIn = false
const outsideTemp = null
// let userEmail;
// let userEmail = undefined // both are same

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // it is false because of symbol

// const bigNumber = 65456435746548768n //n in the last represent bigInt number



// Referrence (Non primitive)

// Array, Objects, Functions (all non primitive datatypes is called function and function's datatype is called object function)

const heroes = ["Shaktiman", "Nagraj", "Doga"] // we write arrays in square brackets}

let myObj = {
    name: "Prasanjeet",
    age: 27,
} // everything inside the curly bracket is objects and datatypes can be anything like string number etc.

// we can treat function as a variable in js

// function(){} it is function definition 
const myFunction = function(){
    console.log("Hello World");
}
    
console.log(typeof outsideTemp);