function callBackFunc(func) {
    console.log("Function 1");
    func();
}

function func() {
    console.log("Function 2");
}

callBackFunc(func);