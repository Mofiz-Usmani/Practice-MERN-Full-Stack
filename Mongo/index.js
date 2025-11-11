const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


const Data = mongoose.model('Data', userSchema);


// const newUser = new Data({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
// });


Data.insertMany([
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 28 },
    { name: 'Charlie', email: 'charlie@example.com', age: 32 },
    { name: 'Diana', email: 'diana@example.com', age: 27 }
]);


newUser.save()
.then(() => {
    console.log("User saved successfully");
})
.catch(err => {
    console.error("Error saving user:", err);
});