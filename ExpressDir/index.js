const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("request recieved");
    res.send("Ka Bau");
})

let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});