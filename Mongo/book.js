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


const Book = mongoose.model('Book', bookSchema); // Create a Mongoose model named 'Book' using the defined schema


// let Books = new Book({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 10.99
// });


// let Book2 = new Book({
//     title: "1984",
//     author: "George Orwell",
//     price: 8.99
// });


// Book2.save()
// .then(() => {
//     console.log("Book saved successfully");
// })
// .catch((err) => {
//     console.error("Error saving book:", err);
// });




// Book.find({})
// .then((res) => {
//     console.log("Retrieved books:", res);
// })
// .catch((err) => {
//     console.error("Error retrieving books:", err);
// });



// Book.updateOne({title: "1984"}, {price: 9.99})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Error updating book:", err);
// });



// Book.findByIdAndDelete("691420ef09859828eb9f06aa")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Error deleting book:", err);
// });



// Book.deleteMany({price: {$lt: 12}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Error deleting books:", err);
// });


// Books.save()
// .then(() => {
//     console.log("Book saved successfully");
// })
// .catch((err) => {
//     console.error("Error saving book:", err);
// });