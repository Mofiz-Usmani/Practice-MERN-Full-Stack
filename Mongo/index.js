const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


const User = mongoose.model('User', userSchema);

