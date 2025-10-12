// function callBackFunc(func) {
//     console.log("Function 1");
//     func();
// }

// function func() {
//     console.log("Function 2");
// }

// callBackFunc(func);







// function higherOrder() {
//     return function() {
//         console.log("Hello");
//     }
// }

// higherOrder()();









// setTimeout(() => {
//     console.log("Hello");
// },2000);




let interval = setInterval(() => {
    console.log("Hello");
}, 1);

setTimeout(() => {
    clearInterval(interval);
},5000);