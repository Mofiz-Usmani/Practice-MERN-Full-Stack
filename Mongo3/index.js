const express = require('express'); // Importing Express framework
const app = express(); // Creating an Express application
const mongoose = require('mongoose'); // Importing Mongoose for MongoDB interactions
const path = require('path'); // Importing path module to work with file paths
const Chat = require('./Models/chat'); // Importing the Chat model
const methodOverride = require('method-override'); // Importing method-override for handling PUT and DELETE requests

// Setting up the views directory
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); // Setting EJS as the template engine
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the public directory
app.use(express.urlencoded({extended: true})); // Middleware to parse incoming request bodies
app.use(methodOverride("_method")); // Middleware to allow PUT and DELETE requests

// Connecting to MongoDB
main()
.then(() => console.log('Connected to MongoDB')) // If connected, log success
.catch(err => console.log(err)); // If an error occurs, log error

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/telegram'); // Connecting to MongoDB database
};




