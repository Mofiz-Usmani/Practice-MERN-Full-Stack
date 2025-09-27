"use strict";


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

// let students = ["Tony", "Steve", "Bruce", "Natasha"];
// let marks = [90, 85, 88, 92];
// let cgpa = [3.5, 3.8, 3.6, 3.9];
// let studentInfo = ["Tony", 9.5, 25, "passed"];

// console.log(students);
// console.log(marks);
// console.log(cgpa);
// console.log(studentInfo);




// Arrays are Mutable : You can change the elements of an array

// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);

// fruits[1] = "Mango"; // Changing "Banana" to "Mango"
// console.log(fruits); // Changes done in the original array



// // Push Method : Adds one or more elements to the end of an-
// // array and returns the new length of the array
// fruits.push("Grapes");
// console.log(fruits); // add grapes at the end



// // Pop Method : Removes the last element from an array and-
// // returns that element
// let lastFruit = fruits.pop();
// console.log(fruits); //removes grapes



// // Unshift Method : Adds one or more elements to the beginning of-
// // an array and returns the new length of the array
// fruits.unshift("Strawberry");
// console.log(fruits); // add strawberry at the beginning



// Shift Method : Removes the first element from an array and-
// returns that element
// let firstFruit = fruits.shift();
// console.log(fruits); // removes strawberry




// IndexOf Method : Returns the first index at which a given element-
// let primary = ['red', 'blue', 'green'];
// console.log(primary.indexOf('green')); // 2
// console.log(primary.indexOf('yellow')); // -1



// Includes Method : Determines whether an array includes a certain element-
// let primary = ['red', 'blue', 'green'];
// console.log(primary.includes('blue')); // true
// console.log(primary.includes('yellow')); // false



// // Concat Method : Merges two or more arrays and returns a new array
// let secondary = ['orange', 'purple'];
// let allColors = primary.concat(secondary);
// console.log(allColors); // ['red', 'blue', 'green', 'orange', 'purple']



// // Reverse Method : Reverses the order of the elements in an array
// primary.reverse();
// console.log(primary); // ['green', 'blue', 'red']




// Slice Method : Returns a shallow copy of a portion of an array into-
// let newArr = ['red', 'blue', 'green', 'yellow', 'purple'];
// console.log(newArr.slice(1,2));
// console.log(newArr.slice(1));
// console.log(newArr.slice(-2));
// console.log(newArr); // orignal array remains the same




// Splice Method : Changes the contents of an array by removing or-
// replacing existing elements and/or adding new elements in place
// let newArr = ['red', 'blue', 'green', 'yellow', 'purple'];
// console.log(newArr.splice(3));
// console.log(newArr); // original array is changed

// console.log(newArr.splice(0,1));
// console.log(newArr); // original array is changed

// console.log(newArr.splice(0,2,"black","white","grey"));
// console.log(newArr); // original array is changed




// Sort Method : Sorts the elements of an array in place and returns-
// the sorted array
// let numbers = [40, 100, 1, 5, 25, 10];
// let fruits = ['banana', 'apple', 'orange', 'mango'];
// console.log(numbers.sort()); // [1, 10, 100, 25, 40, 5]
// console.log(fruits.sort()); // ['apple', 'banana', 'mango', 'orange']
// console.log(numbers.sort((a,b) => a-b)); // Correct way to sort numbers




// Array Reference vs Value :

// let arr1 = [1];
// let arr2 = [1];

// console.log(arr1 == arr2); // false, different references

// let arr3 = arr1;
// console.log(arr1 == arr3); // true, same reference




// Print all odd numbers (1 to 100) using for loop :
// for(let i=1; i<=100; i+=2) {
//     console.log(i);
// }


// Print all even numbers (1 to 100) using for loop :
// for(let i=2; i<=100; i+=2){
//     console.log(i);
// }


// Print multiplication table of a given number using for loop :
// let num = 5; 
// for(let i=num; i<=num*10; i+=num){
//     console.log(num + " X " + i/num + " = " + i);
// }




// Guessin Movie Game : 
// let favoriteMovie = "The Dark Knight"; 
// let userGuess = prompt("Guess my favorite movie : ");

// while(userGuess !== favoriteMovie) {
//     userGuess = prompt("Wrong guess! Try again : ");
// }



// For of Loop in JavaScript :
// let numbers = [10, 20, 30, 40, 50];
// for(let nums of numbers){
//     console.log(nums);
// }



//ToDo App : 

// let todo = [];

// while(true) {
//     let request = prompt("Enter you request add, update, show, delete");
    
//     if(request == "add"){
//         let task = prompt("Enter your task to add : ");
//         todo.push(task);
//         console.log("task added!");
//     }else if(request == "delete"){
//         let del = prompt("Enter you task no to delete : ");
//         todo.splice(del-1,1);
//         console.log("Task Deleted!");
//     }else if(request == "update"){
//         let update = prompt("Enter you task no to update : ");
//         let newtask = prompt("Enter you new task : ");
//         todo.splice(update-1,1,newtask);
//         console.log("Task Updated!");
//     }else if(request == "quit"){
//         break;
//     }else if(request == "show"){
//         for(let i=0; i<todo.length; i++){
//             console.log("Task "+i+ " : "+todo[i]);
//         }
//     } else {
//         console.log("Invalid Request! Please enter a valid request : ");
//     }
// }




// Number of digits in a number :
// let num = 12345;
// let count = 0;
// let n = num;

// // Handle case if number is 0
// if (n === 0) {
//     count = 1;
// } else {
//     while (n > 0) {
//         n = Math.floor(n / 10); // remove last digit
//         count++;
//     }
// }

// console.log("Number of digits in " + num + " is: " + count);




// Largest no in an array : 
// let arr = [2, 5, 10, 4, 2, 7, 1, 1];
// let largest = 0;

// for(let i=0; i<arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }

// console.log("Largest no is : " + largest);





// Largest country name : 
// let countries = ["Palestine", "United States of America", "China", "Russia", "Australia"];
// let largest = "";

// for(let i=0; i<countries.length; i++){
//     if(largest.length < countries[i].length){
//         largest = countries[i];
//     }
// }
// console.log(largest);





// Object Literal in JavaScript :
// let person = {
//     name : "Tony Stark",
//     age : 45,
//     isAvenger : true,
//     movies : ["Iron Man", "Avengers", "Spider-Man"],
//     address : {
//         state : "New York",
//         country : "USA"
//     }
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isAvenger);
// console.log(person.movies);
// console.log(person.address);



// const post = {
//     username : "tonyStark",
//     content : "About Movies",
//     likes : 100000,
//     comments : ["Great Post", "Awesome", "Nice Work"],
//     date : "2023-10-10"
// };

// console.log(post);
// console.log(post.username);
// console.log(post.content);
// console.log(post.likes);
// console.log(post.comments);
// console.log(post.date);


// post.likes = 150000; // updating likes
// post.comments.push("Amazing!"); // adding new comment
// console.log(post.comments);

// post.genre = "Entertainment"; 
// console.log(post);// adding new property genre




// Math Object in JavaScript :

// console.log(Math.PI); // 3.141592653589793

// console.log(Math.abs(-10)); // 10
// console.log(Math.abs(10)); // 10

// console.log(Math.pow(2, 3)); // 8

// console.log(Math.sqrt(16)); // 4

// console.log(Math.ceil(4.2)); // 5 roundoff to the largest nearest integer
// console.log(Math.ceil(4.8)); // 5

// console.log(Math.floor(4.2)); // 4 // roundoff to the smallest nearest integer
// console.log(Math.floor(4.8)); // 4

// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random()*100); // random number between 0 and 100
// console.log(Math.floor(Math.random()*100));




// Functions in JavaScript :

// function greet() {
//     console.log("Hello, World!");
// }

// greet(); // Calling the function


// let name = function() {
//     console.log("Tony Stark");
// }

// name(); // Calling the function





// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }

// avg(10,20,30);
// avg(40,50,60);
// avg(70,80,90);




// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,20));
// console.log(sum(30,40));
// console.log(sum(50,60));






// Function to return concat all strings in an array :
// let arr = ["Hello", " ", "World", "!"];

// function concatStrings(array) {
//     let result = "";

//     for(let i=0; i<array.length; i++){
//         result += array[i];
//     }
//     return result;
// }

// console.log(concatStrings(arr));





// Scope in JavaScript :

// Global Scope
// let globalVar = "I am a global variable";

// function checkScope() {
//     // Local Scope
//     let localVar = "I am a local variable";
//     console.log(globalVar); // Accessible
//     console.log(localVar); // Accessible
// }

// checkScope();
// console.log(globalVar); // Accessible
// console.log(localVar); // Not Accessible, will throw an error






// Block Scope with let, const and var  :

// {
//     let x = 10; // Block-scoped
// }
// console.log(x); // Not Accessible, will throw an error

// {
//     const y = 20; // Block-scoped
// }
// console.log(x); // Not Accessible, will throw an error

// {
//     var z = 30; // Function-scoped or globally-scoped
// }
// console.log(z); // Accessible







// Lexical Scope in JavaScript :
// function outerFunction() {
//     let outerVar = "I am from outer function";
//     function innerFunction() {
//         let innerVar = "I am from inner function";
//         console.log(outerVar); // Accessible
//         console.log(innerVar); // Accessible
//     }
//     innerFunction();
//     console.log(outerVar); // Accessible
//     console.log(innerVar); // Not Accessible, will throw an error
// }

// outerFunction();








// Callback Function : 
// function greet( callback) {
//     console.log("Hello ");
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet(sayGoodbye);
// Use : Make sure some code runs only after something else finishes.





// Higher Order Function : 
// function OddorEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }else {
//         console.log("Wrong Request");
//     }
// }

// let isOdd = OddorEvenFactory("odd");
// isOdd(5);  // true
// isOdd(6);  // false

// let isEven = OddorEvenFactory("even");
// isEven(4); // true
// isEven(7); // false






// Arrow Function : 
const sum = (a,b) => {
    console.log(a+b);
}

let cube = n => {
    console.log(n*n*n);
}

const hello = () => {
    console.log("Hello!!");
}


sum(4,5);
cube(3);
hello();