const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you are in the home page");       
});

// https://www.google.com/search?q=apple q= somthing like this is query string 

// https://localhost:3000/search?q=apple
// https://localhost:3000/search?q=apple&color=red

app.get("/search", (req, res) => {
    // console.log(req.query); // this will give us the query string in the url
    // console.log(req.query.q); // this will give us the value of q in the query string
    let {q}=req.query; // this will give us the value of q in the query string
    if(!q){
        res.send("please provide a query string"); // this will send the query string as a response
        return;
    }
    res.send(`<h1>serach result for query: ${q}</h1>`); // this will send the query string as a response

}); // this will send the query string as a response