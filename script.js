// // Data Type in JavaScript : 

// // Primitives Data Types in JavaScript : They are immutable
// // Number, String, Boolean, Null, Undefined, Object, Symbol

// // Example :
// let num = 42; // Number
// let str = "Hello, World!";  
// let isTrue = true; // Boolean
// let emptyValue = null;
// let notDefined; // Undefined
// let obj = { name: "Alice", age: 30 };
// let sym = Symbol("unique");

// // Checking Data Types
// console.log(typeof(num)); // "number"
// console.log(typeof str); // "string"
// console.log(typeof isTrue); // "boolean"
// console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)
// console.log(typeof notDefined); // "undefined"
// console.log(typeof obj); // "object"
// console.log(typeof sym); // "symbol"    
// console.log(" ");


// // Non-Primitives Data Types in JavaScript : They are mutable
// // Arrays, Functions, Dates, Error

// // Example :
// let arr = [1, 2, 3, 4, 5]; // Array
// let func = function() { return "Hello"; }; // Function
// let date = new Date(); // Date
// let error = new Error("Something went wrong!"); // Error


// // Checking Data Types
// console.log(typeof arr); // "object"
// console.log(typeof func); // "function"
// console.log(typeof date); // "object"
// console.log(typeof regex); // "object"
// console.log(typeof error); // "object"
// console.log(error.message); // "Something went wrong!"
// console.log(date.toDateString()); // Outputs the date in a readable format
// console.log(arr.length); // 5
// console.log(func()); // "Hello"


// let newHello = function hello() {
//     console.log("Hello, World!");
// }

// newHello();


// NaN in JavaScript : when a mathematical operation is not possible,-
// it returns NaN (Not-a-Number)

let a = 0;
let b = "string";
let c = a / b; // This will result in NaN (Not-a-Number)

console.log(c);
console.log(typeof c); // "number"
console.log(isNaN(c)); // true