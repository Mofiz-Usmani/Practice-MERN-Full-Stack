class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}


// new operator is used to create an instance of the class
const dog = new Animal("Buddy", "Dog");
dog.makeSound(); // Output: Buddy makes a sound.
const cat = new Animal("Whiskers", "Cat");
cat.makeSound(); // Output: Whiskers makes a sound.



class person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
    getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = new person("John", "Doe");
console.log(john.getFullName()); // Output: John Doe