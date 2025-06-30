const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you are in the home page");       
});



// root paath ke baad jo bhi likha hoga wo path parameter hoga
// path parameter ko hum request params se access kar sakte hain
app.get("/:username", (req, res) => {
    console.log(req.params); // this will give you the details of the request object
    res.send(`you are in the ${req.params.username} page`);       
});

// argument as id in the url 
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`you are in the ${username} page id=${id}`);       
});



// to send html string 
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    htmlstr=`<h1>you are in the ${username} page id=${id}</h1>`
    res.send(htmlstr);       
});