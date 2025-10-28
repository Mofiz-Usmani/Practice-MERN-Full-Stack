// let  n = 5;
// for(let i=0; i<n; i++){
//     console.log("Hello", i);
// }

// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("Hello to ",args[i]);
// }


// let a = Number(process.argv[2]);
// let b = Number(process.argv[3]);

// console.log(a + b);



// const someValue = require("./math");

// // console.log(someValue);
// console.log(someValue.sum(4,7));
// console.log(someValue.mul(4,5));




// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Ka Baau!!");
//   console.log(text);
// }

// doStuff();


// import {sum, mul} from "./math.js";

// console.log(sum(2, 8));
// console.log(mul(8, 3));







// JSON - JavaScript Object Notation

// const fs = require("fs");

// let data = fs.readFileSync("data.json", "utf-8");
// let obj = JSON.parse(data);

// console.log(obj);
// obj.name = "New Name";

// let newData = JSON.stringify(obj);
// fs.writeFileSync("data.json", newData, "utf-8");

// console.log(newData);








// Asynchronous Programming in JS
// const fs = require("fs");

// console.log("Start");
// fs.readFile("data.txt", "utf-8", function(err, data){
//     if(err){
//         console.log("Error", err);
//     } else {
//         console.log("Data", data);
//     }
// });
// console.log("End");








// Promises in JS
// const fs = require("fs").promises;

// console.log("Start");
// fs.readFile("data.txt", "utf-8")
//     .then(function(data){
//         console.log("Data", data);
//     })
//     .catch(function(err){
//         console.log("Error", err);
//     });
// console.log("End");












// Async/Await in JS
// const fs = require("fs").promises;
// async function readFileAsync() {
//     console.log("Start");
//     try {
//         let data = await fs.readFile("data.txt", "utf-8");
//         console.log("Data", data);
//     } catch (err) {
//         console.log("Error", err);
//     }
//     console.log("End");
// }
// readFileAsync();














// Callbacks, Promises, Async/Await together
const fs = require("fs");
const fsPromises = require("fs").promises;

function readFileCallback(filename, callback) {
    fs.readFile(filename, "utf-8", function(err, data){
        if(err){
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

function readFilePromise(filename) {
    return fsPromises
        .readFile(filename, "utf-8");
}   
async function readFileAsyncAwait(filename) {
    let data = await fsPromises.readFile(filename, "utf-8");
    return data;
}   











// Array Methods in JS
let arr = [5, 3, 8, 1, 2];
// forEach
arr.forEach(function(value, index){
    console.log("Value:", value, "Index:", index);
});





// map
let squaredArr = arr.map(function(value){
    return value * value;
});
console.log("Squared Array:", squaredArr);






// filter
let evenArr = arr.filter(function(value){
    return value % 2 === 0;
});
console.log("Even Array:", evenArr);









// reduce
let sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log("Sum of Array:", sum);








// find
let firstGreaterThan4 = arr.find(function(value){
    return value > 4;
});
console.log("First value greater than 4:", firstGreaterThan4);







// sort
let sortedArr = arr.slice().sort(function(a, b){
    return a - b;
});
console.log("Sorted Array:", sortedArr);





// some
let hasEven = arr.some(function(value){
    return value % 2 === 0;
});
console.log("Array has even number:", hasEven);






// every
let allPositive = arr.every(function(value){
    return value > 0;
});
console.log("All values are positive:", allPositive);






// findIndex
let indexFirstGreaterThan4 = arr.findIndex(function(value){
    return value > 4;
});
console.log("Index of first value greater than 4:", indexFirstGreaterThan4);









// flatMap
let nestedArr = [1, 2, [3, 4], [5, 6]]; 
let flattenedAndMappedArr = nestedArr.flatMap(function(value){
    if(Array.isArray(value)){
        return value.map(v => v * 2);
    } else {
        return value * 2;
    }
});
console.log("Flattened and Mapped Array:", flattenedAndMappedArr);







// includes
let includes3 = arr.includes(3);
console.log("Array includes 3:", includes3);