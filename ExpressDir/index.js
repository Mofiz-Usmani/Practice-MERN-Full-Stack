const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("request recieved");
    res.send("Ka Bau");
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


let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});