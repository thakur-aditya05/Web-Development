const express = require("express");
const app=  express()









// all are the users rellated post 
app.get("/users", (req, res) => {
  res.send("GET for users");
});

// all are the users rellated post 
app.get("/users/:id", (req, res) => {
  res.send("GET for user id");
});

// all are the users rellated post 
app.post("/users", (req, res) => {
  res.send("POST for users");
});

// all are the users rellated post 
app.post("/users", (req, res) => {
  res.send("POST for users");
});

// all are the users rellated post 
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for user id");
});






// posts related saare routes 
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});


app.get("/posts/:id", (req, res) => {
  res.send("GET for post id");
});


app.post("/posts", (req, res) => {
  res.send("POST for posts");
});


app.delete("/posts/:id", (req, res) => {
  res.send("DELETE for post id");
});











// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});