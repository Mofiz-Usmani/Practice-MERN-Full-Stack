// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   makeSound() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }


// // new operator is used to create an instance of the class
// const dog = new Animal("Buddy", "Dog");
// dog.makeSound(); // Output: Buddy makes a sound.
// const cat = new Animal("Whiskers", "Cat");
// cat.makeSound(); // Output: Whiskers makes a sound.



// class person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//     getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const john = new person("John", "Doe");
// console.log(john.getFullName()); 





// Inheritance Example
// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }
//     honk() {
//     console.log("Beep beep!");
//     }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }

//   displayInfo() {
//     console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
//   }
// }

// const myCar = new Car("Toyota", "Corolla");
// myCar.honk();




// Polymorphism Example
// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//     area() {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// console.log("Rectangle Area:", new Rectangle(5, 10).area());





// Encapsulation Example
// class BankAccount {
//   #balance;
//     constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }
//     deposit(amount) {
//     if (amount > 0) {
//         this.#balance += amount;
//     }
//   }
//     getBalance() {
//     return this.#balance;
//   }
// }
// const myAccount = new BankAccount(1000);
// myAccount.deposit(500);
// console.log("Current Balance:", myAccount.getBalance()); 









// Abstraction Example
// class CoffeeMachine {
//   #waterLevel;
//   constructor() {
//     this.#waterLevel = 0;
//   }

//   fillWater(amount) {
//     this.#waterLevel += amount;
//   }

//   brewCoffee() {
//     if (this.#waterLevel > 0) {
//       console.log("Brewing coffee...");
//       this.#waterLevel -= 1;
//     } else {
//       console.log("Please fill the water tank.");
//     }
//   }
// }
// const myCoffeeMachine = new CoffeeMachine();
// myCoffeeMachine.fillWater(3);
// myCoffeeMachine.brewCoffee();







// Method overriding Example
// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }
// class Child extends Parent {
//   greet() {
//     console.log("Hello from Child");
//   }
// }

// const childInstance = new Child();
// childInstance.greet(); 






// Static method Example
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log("Sum:", MathUtils.add(5, 10));







// Getter and Setter Example
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get area() {
//     return this.width * this.height;
//   }
//   set dimensions({ width, height }) {
//     this.width = width;
//     this.height = height;
//   }
// }
// const rect = new Rectangle(5, 10);
// console.log("Area:", rect.area);






// Chaining Example
// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }

//   add(amount) {
//     this.value += amount;
//     return this;
//   }

//   subtract(amount) {
//     this.value -= amount;
//     return this;
//   }

//   multiply(factor) {
//     this.value *= factor;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// // Usage
// const result = new Calculator(5)
//   .add(10)
//   .subtract(3)
//   .multiply(2)
//   .getResult();

// console.log("Final Result:", result);





// Module Example
// const mathModule = (() => {
//     function add(a, b) {
//         return a + b;
//     }

//     function subtract(a, b) {
//         return a - b;
//     }
//     return {
//         add,
//         subtract
//     };
// })();

// console.log("Addition:", mathModule.add(10, 5)); 
// console.log("Subtraction:", mathModule.subtract(10, 5));






// Mixins Example
// const canFly = {
//   fly() {
//     console.log(`${this.name} is flying!`);
//   }
// };
// const canSwim = {
//   swim() {
//     console.log(`${this.name} is swimming!`);
//   }

// };

// class Duck {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(Duck.prototype, canFly);
// Object.assign(Fish.prototype, canSwim);

// const donald = new Duck("Donald");
// const nemo = new Fish("Nemo");

// donald.fly();
// nemo.swim();






// Prototype Example
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    console.log("Nice to meet you!");
};

const alice = new Person("Alice", 30);
alice.greet();