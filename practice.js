// function callBackFunc(func) {
//     console.log("Function 1");
//     func();
// }

// function func() {
//     console.log("Function 2");
// }

// callBackFunc(func);







function higherOrder() {
    return function() {
        console.log("Hello");
    }
}

higherOrder()();