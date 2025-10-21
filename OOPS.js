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
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

    area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log("Rectangle Area:", new Rectangle(5, 10).area());