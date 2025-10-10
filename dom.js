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







// let div = document.querySelector('div');
// let h3 = document.querySelector('h3');

// console.log(h3.parentElement);
// console.log(div.children);
// console.log(div.childElementCount);




// let middleDiv = document.querySelector('#middle');

// console.log(middleDiv.previousElementSibling.innerHTML); // <div>First</div>
// console.log(middleDiv.nextElementSibling.innerHTML);     // <div>Third</div>


// middleDiv.previousElementSibling.style.color = "red";
// middleDiv.nextElementSibling.style.color = "green";







// let p = document.createElement('p');

// p.innerText = "Hi, i am a new para";

// let body = document.querySelector('body');

// body.appendChild(p);


// let btn = document.createElement('button');

// btn.innerText = "Click Me!";

// body.appendChild(btn);

// p.append(", this is a new text");

// p.append(btn);

// p.prepend(btn); // moves or add the element to the start of the para

// // adds the button before the para beign means above the para line
// p.insertAdjacentElement('beforebegin', btn); 

// // adds the button before the para start on the same line
// p.insertAdjacentElement('afterbegin', btn);

// // places the btn at the end of the para on the same line
// p.insertAdjacentElement('beforeend', btn);

// // places the btn below the para line line at the start of the new line
// p.insertAdjacentElement('afterend', btn);








// body.removeChild(p);

// p.remove();

// body.removeChild(btn);

// btn.remove();







// let p = document.createElement('p');

// p.innerText = "Hey, i'm red";

// p.style.color = 'red';

// document.querySelector('body').appendChild(p);






// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText = "I'm in a div";
// p.innerText = "ME TOO!";

// document.querySelector('body').appendChild(div);

// div.appendChild(h1);
// div.appendChild(p);
// div.classList.add("newdiv");






// let input = document.createElement('input');
// let btn = document.createElement('button');

// btn.innerText = "Click Me";

// document.querySelector('body').append(input, btn);


// input.setAttribute('placeholder', 'username');
// btn.setAttribute('id', 'btn');

// console.log(btn.getAttribute("id"));  // prints btn id

// btn.classList.add('btn-style');







// let h1 = document.createElement('h1');
// document.querySelector('body').append(h1);

// h1.innerText = "DOM Practice";

// h1.classList.add('head-style');








// let btn = document.querySelector('button');

// btn.onclick = function() {
//     console.log("Button was clicked!");
// }


// let sayHello = () => {
//     let name = prompt("Enter your name : ");
//     alert(`Hello ${name}`);
// }

// btn.onclick = sayHello;







// let btns = document.querySelectorAll("button");

// for(let btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = () => {
//         console.log("Mouse Entered");
//     }
// }


// Arrow functions and function expressions are not hoisted,
// so they can’t be used before they’re defined.
// Function declarations are hoisted, so they can be used anywhere in the code.

// let sayHello = () => {
//     console.log("Hello!");
// }

// function sayHello() {
//     console.log("Hello!");
// }








// Overwriting Problem with onclick

// let btn = document.querySelector("button");

// btn.onclick = () => console.log("First handler");
// btn.onclick = () => console.log("Second handler"); //This overwrites the first one

// btn.click(); // Output: "Second handler"




// Using addEventListener

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => console.log("First handler"));
// btn.addEventListener("click", () => console.log("Second handler"));

// btn.click();
// Now both handlers run — no overwriting.





// let btn = document.querySelector('button');

// // Removing a Listener
// function sayHi() {
//     console.log("Hi!");
// }

// btn.addEventListener("click", sayHi);

// Later if needed:
// btn.removeEventListener("click", sayHi); 
//Works only with addEventListener







// Using Options
// let btn = document.querySelector('button');

// btn.addEventListener("click", () => {
//     console.log("Clicked only once");
// }, { once: true }); //Runs just once

// onclick = simple, but old-school and limited.
// addEventListener() = modern, powerful, and scalable — used in all real projects.





// let btns = document.querySelectorAll('button');

// for(let btn of btns){
//     btn.addEventListener('click', sayHello);
//     btn.addEventListener('click', sayName);
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Apna College");
// }









// Activity : 
// let btn = document.querySelector('button');
// let div = document.querySelector('div');
// let h3 = document.querySelector('h3');


// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);


// btn.addEventListener('click', generateColor);


// function generateColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     h3.innerText = `rgb(${r}, ${g}, ${b})`;
// }








// This in eventlistener
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');


// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
//     this.style.padding = "10px";
//     this.style.border = "2px solid black";
// }

// btn.addEventListener('click', changeColor);
// p.addEventListener('click', changeColor);
// h1.addEventListener('click', changeColor);
// h3.addEventListener('click', changeColor);







// let inp = document.querySelector('input');

// inp.addEventListener('keydown', function(event) {
//     console.log("Key was pressed");
//     console.log(event.key);
//     console.log(event.code);
// });


// inp.addEventListener('keyup', function(event){
//     console.log('key was released');
//     console.log(event.key);
//     console.log(event.code);
// });








// let form = document.querySelector('form');

// // event.preventDefault() stops the browser’s default action for that event-
// // in forms, it prevents the page from reloading on submit.
// form.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     alert("Form submitted");
// }); 






















// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let user = document.querySelector('#user');
//     let pass = document.querySelector('#pass');


//     console.log(user.value);
//     console.log(pass.value);
// });








// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // used when we have lot of html elements
//     let user = event.target.elements[0];  
//     let pass = event.target.elements[1];
//     let color = event.target.elements[2];  

//     console.log(user.value);
//     console.log(pass.value);
//     console.log(color.value);
// });







// let user = document.querySelector('#user');

// user.addEventListener("change", function(e) {
//     e.preventDefault();
//     console.log('input changed');
//     console.log('final value : ', user.value);
// });








// let inp = document.querySelector("#text");
// let p = document.querySelector('p');

// inp.addEventListener('input', function() {
//     console.log(inp.value);
//     p.style.fontWeight = 'bolder';
//     p.innerText = inp.value;
// });







// window.addEventListener('scroll', () => {
//     console.log("You are scrolling the page");
// });











// let btn = document.createElement('button');

// document.querySelector('body').append(btn);

// btn.innerText = "Click Me!";


// btn.addEventListener('click', () => {
//     btnColorChange();
// });

// function btnColorChange() {
//     btn.classList.add('change-color');
// }













// Event Bubbling : 
// let div = document.querySelector('div')
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');


// div.addEventListener('click', () => {
//     console.log("Div was clicked");
// });

// ul.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('Ul was clicked');
// });


// for(let li of lis){
//     li.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log("Li was clicked");
//     });
// }









// h1 = document.querySelector('h1');

// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor('red', 1000);
// changeColor('green', 1000);
// changeColor('yellow', 1000);




// function changeColor(color, delay, nextColorChange){
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }



// changeColor('red', 1000, () => {
//     changeColor('orange', 1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('yellow', 1000, () => {
//                 changeColor('blue', 1000);
//             });
//         });
//     });
// });






// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 11);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "apna College",
//   () => {
//     console.log("success1: your data was saved");
//     savetoDB(
//       "hello",
//       () => {
//         console.log("success2: data2 was saved");
//       },
//       () => {
//         console.log("failure2: weak connection, data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure1: weak connection, data not saved");
//   }
// );










// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random()*11);
//     if(internetSpeed > 4){
//       resolve("Success : data was saved");
//       console.log(internetSpeed);
//     } else {
//       reject("Failure : weak connection");
//       console.log(internetSpeed);
//     }
//   });
// }

// console.log(savetoDb("apna college"));
// console.log(savetoDb("Mofiz"));








// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 11);
//     if(internetSpeed > 4) {
//       resolve("Success : data was saved");
//     }else {
//       reject("Failure : weak connection");
//     }
//   });
// }

// savetoDB("apna college")
// .then((result) => {
//   console.log(result);
// })
// .catch((result) => {
//   console.log(result);
// });









function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 11);
    if(internetSpeed > 4) {
      resolve("Success : data was saved");
    }else {
      reject("Failure : weak connection");
    }
  });
}

savetoDB("apna college")
.then(() => {
  console.log("data1 saved");
  return savetoDB("Hello");
})
.then(() => {
  console.log("data2 saved");
  return savetoDB("alex");
})
.then(() => {
  console.log("data3 saved");
})
.catch(() => {
  console.log("promise was rejected");
});