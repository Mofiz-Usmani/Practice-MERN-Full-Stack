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


const newUser = new Data({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
});

newUser.save()
.then(() => {
    console.log("User saved successfully");
})
.catch(err => {
    console.error("Error saving user:", err);
});