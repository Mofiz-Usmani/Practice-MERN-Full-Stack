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

const fs = require("fs");

let data = fs.readFileSync("data.json", "utf-8");
let obj = JSON.parse(data);

console.log(obj);
obj.name = "New Name";

let newData = JSON.stringify(obj);
fs.writeFileSync("data.json", newData, "utf-8");

console.log(newData);


