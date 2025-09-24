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

// let a = 0;
// let b = "string";
// let c = a / b; // This will result in NaN (Not-a-Number)

// console.log(c);
// console.log(typeof c); // "number"
// console.log(isNaN(c)); // true


// Types of Variable Declaration in JavaScript :

// var, let, const

// // 1. var : Function-scoped or globally-scoped, can be re-declared and updated
// var x = 10;
// console.log(x); // 10

// var x = 20; // Re-declaration is allowed
// console.log(x); // 20
// x = 30; // Update is allowed
// console.log(x); // 30

// // // 2. let : Block-scoped, cannot be re-declared in the same scope but can be updated
// let y = 10;
// console.log(y); // 10

// // let y = 20; // Re-declaration in the same scope is not allowed (Uncommenting this line will cause an error)
// y = 20; // Update is allowed
// console.log(y); // 20

// // // 3. const : Block-scoped, cannot be re-declared or updated
// const z = 10;
// console.log(z); // 10    
// // const z = 20; // Re-declaration is not allowed (Uncommenting this line will cause an error)
// // z = 20; // Update is not allowed (Uncommenting this line will cause an error)
// console.log(z); // 10

// // Summary
// // var is function-scoped and can be re-declared and updated.
// // let is block-scoped and can be updated but not re-declared in the same scope.
// // const is block-scoped and cannot be re-declared or updated.


// Dynamic Typing in JavaScript : A variable can hold any type of data and can 
// change types at runtime.
// let a = 10;
// console.log(typeof a);
// a = true;
// console.log(typeof a);
// a = "Hello";
// console.log(typeof a);



// String in JavaScript :

// let FullName = "Tony Stark";

// console.log(FullName[0]);
// console.log(FullName.length);
// console.log(FullName.toUpperCase());
// console.log(FullName.toLowerCase());
// console.log(FullName.slice(0, 4));
// console.log(FullName.replace("Tony", "Iron"));
// console.log(FullName.concat(" is Iron Man"));



// Template Literals in JavaScript :

// let firstName = "Tony";
// let lastName = "Stark";
// let age = 45;   

// let aboutMe = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

// console.log(aboutMe);




// Switch Case in JavaScript :

// let color = "yellow";

// switch(color) {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Ready");
//         break;
//     case "green" :
//         console.log("Go");
//         break;
//     default :
//         console.log("Invalid Color");
//         break;
// }




// Alert and Prompt in JavaScript :

// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// let msg = `Hello ${firstName} ${lastName}, welcome to JavaScript!`;
// alert(msg);



// String Methods in JavaScript :


// let str = "    hello ";
// console.log(str.length);

// // trim() method
// console.log(str.trim());
// console.log(str.length); // old string remains the same

// console.log(str.trim().length); // new trimmed string length

// // indexOf() method
// let newStr = "Tony Stark";
// console.log(newStr.indexOf("y"));


// Slice() method

// let anotherStr = "Hello, World!";
// console.log(anotherStr.slice(0, 5));
// console.log(anotherStr.slice(7));
// console.log(anotherStr.slice(-6, -1)); // from end


// let str = "ILoveCoding";
// console.log(str.replace("Coding", "JavaScript"));
// console.log(str); // original string remains unchanged


// let str = "ILoveCoding";
// console.log(str.repeat(100));



// Arrays in JavaScript :

let students = ["Tony", "Steve", "Bruce", "Natasha"];
let marks = [90, 85, 88, 92];
let cgpa = [3.5, 3.8, 3.6, 3.9];
let studentInfo = ["Tony", 9.5, 25, "passed"];

console.log(students);
console.log(marks);
console.log(cgpa);
console.log(studentInfo);
