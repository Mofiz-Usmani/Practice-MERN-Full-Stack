// let imgObj = document.getElementById("mainImg");

// console.log(imgObj.src);

// // Now changing the image src with new image usign get element by id

// imgObj.src = "https://images.unsplash.com/photo-1759431318039-0666f33d504b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// console.log(imgObj.src);




// let images = document.getElementsByClassName("imgs");

// for(let i=0; i<images.length; i++){
//     console.dir(document.getElementsByClassName("img")[i]);
//     console.log(images[i].src);
// }






// let p1 = document.getElementsByTagName("p");

// console.log(p1);
// console.log(p1[0].innerText);
// console.log(p1[1].innerText);
// console.log(p1[2].innerText);

// p1[0].innerText = "Lorem";
// console.log(p1[0].innerText);





let para1 = document.querySelector('p');  // selects first p element
console.log(para1.innerText);

let para2 = document.querySelector('#para2');  // selects first element with id para2
console.log(para2.innerText);

let para3 = document.querySelector(".para3");  // selects first element with class para3
console.log(para3.innerText);

let para = document.querySelectorAll('p');  // selects all p elements
console.log(para[0].innerText);


let a = document.querySelector('div a');  // Selects first anchor tag in the div element
console.log(a.innerText);

let b = document.querySelectorAll('div a');  // Selects all anchor tags in the div element
console.log(b[2].innerText);
