const express = require("express");
const app = express();

let port = 3000;

// Define routes first
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

// Catch-all route for anything else
app.use((req, res) => {
    console.log("request received");
    res.send("Ka Bau");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
