const express = require("express");
const app = express();
const port = 3000;

// Import faker
const { faker } = require("@faker-js/faker");

// Function to create a random user
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),                
    name: faker.person.fullName(),          
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  };
};

console.log("Random User:", getRandomUser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/apple", (req, res) => {
  res.send("Apple Page");
});

app.get("/banana", (req, res) => {
  res.send("Banana Page");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
