const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB

main()
.then(() => {
    console.log('MongoDB Connected...'); // Log message when connection is successful
})
.catch((err) => console.log(err)); // Log error if connection fails

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/meesho'); // Connect to the local MongoDB database named 'test'
}



const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});