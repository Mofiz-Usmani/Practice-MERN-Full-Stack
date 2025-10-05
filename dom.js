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





// let para1 = document.querySelector('p');  // selects first p element
// console.log(para1.innerText);

// let para2 = document.querySelector('#para2');  // selects first element with id para2
// console.log(para2.innerText);

// let para3 = document.querySelector(".para3");  // selects first element with class para3
// console.log(para3.innerText);

// let para = document.querySelectorAll('p');  // selects all p elements
// console.log(para[0].innerText);


// let a = document.querySelector('div a');  // Selects first anchor tag in the div element
// console.log(a.innerText);

// let b = document.querySelectorAll('div a');  // Selects all anchor tags in the div element
// console.log(b[2].innerText);








// let p = document.querySelector('p');

// // Logs only the visible text inside the <p> tag
// console.log(p.innerText); // what the user sees (rendered text)

// // Logs all the text content inside the <p> tag (including hidden text, spacing, etc.)
// console.log(p.textContent); // all text, including hidden

// // Logs the raw HTML inside the <p> tag (includes inner tags, not just plain text)
// console.log(p.innerHTML); // HTML code inside the element



// p.innerHTML = "<u>Spiderman is an <b>Avenger<b></u>";




// let head = document.querySelector('h3');

// console.log(head.getAttribute('id'));  // gives id of the selected element


// head.setAttribute('id', 'h3');

// console.log(head.getAttribute('id'));  // set the the attribute to the new attribute value

// console.log(head.getAttribute('class'));

// head.setAttribute('class', 'newclass');

// console.log(head.getAttribute('class'));







// let h3 = document.querySelector('h3');

// h3.style.color = "purple";


// let div = document.querySelector('div');

// div.style.height = "100px";
// div.style.width = "100px";
// div.style.backgroundColor = "purple";



// let divs = document.querySelectorAll('div');

// for(let div of divs){
//     div.style.height = "100px";
//     div.style.width = "100px";
//     div.style.backgroundColor = "purple";
//     div.style.border = "2px solid black";
// }




// let spans = document.querySelectorAll('span');

// for(let span of spans){
//     span.style.height = "100px";
//     span.style.width = "100px";
//     span.style.backgroundColor = "green";
//     span.style.border = "2px solid black";
//     span.style.display = "inline-block";
// }








// let heading = document.querySelector('h3');

// console.log(heading.classList); // to check if the element have a class or not

// heading.classList.add('green'); // this adds class green to the element 

// console.log(heading.classList.value); // now this shows class green

// heading.classList.remove('green'); // removes the class green form the element

// console.log(heading.classList.contains('green')); // this returns true or flase if have class or not


// heading.classList.toggle('green'); // if have the green class then it removes it, and if not adds it 







let div = document.querySelector('div');
let h3 = document.querySelector('h3');

console.log(h3.parentElement);
console.log(div.children);
console.log(div.childElementCount);




let middleDiv = document.querySelector('#middle');

console.log(middleDiv.previousElementSibling.innerHTML); // <div>First</div>
console.log(middleDiv.nextElementSibling.innerHTML);     // <div>Third</div>


middleDiv.previousElementSibling.style.color = "red";
middleDiv.nextElementSibling.style.color = "green";
