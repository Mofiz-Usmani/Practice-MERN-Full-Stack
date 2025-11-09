const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Import faker
const { faker, th } = require("@faker-js/faker");

// Function to create a random user
// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),                
//     name: faker.person.fullName(),          
//     email: faker.internet.email(),
//     address: faker.location.streetAddress(),
//   };
// };

// console.log("Random User:", getRandomUser());



const mysql = require('mysql2');

// create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alamgeer1972@786',
  database: 'delta_student'
});




// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),                
//     faker.person.firstName(),          
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";


// let data = [];
// for(let i=0; i<=100; i++){
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     // console.log("Rows inserted:", result.affectedRows);
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
//   } );
// } catch (error) {
//   console.error("Error executing query:", error);
// }



app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]['count(*)'];
      res.render("home", {count: count});
    } );
  } catch (error) {
    console.error("Error executing query:", error);
  }
});








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
