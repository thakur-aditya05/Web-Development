// ----------------------------------
// concept of routing
const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you are in the home page");       
});

app.get("/apple", (req, res) => {
    res.send("you are in the apple page");       
});
app.get("/orange", (req, res) => {
    res.send("you are in the orange page");       
});



// if request path does not matched with any of the above path then this will be executed
// this is used to handle the 404 error
app.get("*", (req, res) => {
    res.send("you are in the orange page");       
});


// send the post requests from hoppscotch
app.post("/", (req, res) => {
    res.send("you are in the home page");       
});
// ------------------------


// ------------------------
// lets learn about Nodemon 
// autoomatically restart the server when we make changes in the code
// >> npm install -g nodemon    ; save it globally
// >> nodemon -v ; check the version
// >> nodemon index.js ; this will start the server and watch for changes








// ------------------------










































