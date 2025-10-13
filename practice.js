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


// let arr = [1,2,3,4,5];

// arr.forEach((num, i) => {
//     arr[i] = num*2;
// });

// console.log(arr);
// changes the orignal array







// let arr = [1,2,3,4,5];

// let newArr = arr.map((el) => {
//     return el*2;
// });

// console.log(newArr); // changes done in new array 
// console.log(arr); // orignal remains the same







// let nums = [1,2,3,4,5,6,7,8,9];

// let even = nums.filter((num) => {
//     return num%2 == 0;
// });

// console.log(even);

// let even = nums.filter((num) => (num%2 == 0));

// console.log(even);









// let arr = [2,4,6];

// console.log(arr.every((num) => num%2 === 0));

// let isAllEven = arr.every((num) => num%2 === 0);

// console.log(isAllEven);






// let arr = [1,3,5,7,9];

// let some = arr.some((num) => num%2 === 0);
// console.log(some);





// let arr = [1,2,3,4,5];

// let total = arr.reduce((a,b) => a*b);
// console.log(total);





// let arr1 = [1,2,3,4,5];

// let arr2 = [...arr1,6,7,8,9];

// console.log(arr1)
// console.log(arr2)

// console.log(Math.max(...arr1))
// console.log(Math.min(...arr2))

// console.log(...arr1,...arr2);








// function sum(...nums) {
//     return nums.reduce((a,b) => a+b);
// }

// console.log(sum(1,2,3,4,5));








// let nums = [1,2,3,4,5,6,7,8,9,10];

// let [a,b,c] = nums;

// console.log(a)
// console.log(b)
// console.log(c)



// let student = {
//     name : 'Mofiz', 
//     roll_no : 15,
//     age : 24,
//     city : 'Mumbai'
// };



// let {name, age} = student;

// console.log(name);
// console.log(age);











let h1 = document.getElementById('head1')