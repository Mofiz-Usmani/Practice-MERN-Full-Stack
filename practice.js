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




// let interval = setInterval(() => {
//     console.log("Hello");
// }, 1);

// setTimeout(() => {
//     clearInterval(interval);
// },5000);






// let arr = [1,2,3,4,5];

// arr.forEach((el) => {
//     console.log(el);
// });


// let arr = [1,2,3,4,5];

// arr.forEach((el, i) => {
//     console.log(el, i);
// });


let arr = [1,2,3,4,5];

arr.forEach((num, i) => {
    arr[i] = num*2;
});

console.log(arr);
// changes the orignal array