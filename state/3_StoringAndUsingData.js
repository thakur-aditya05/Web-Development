const express = require("express");
const app=  express()
// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");


const cookieParser = require("cookie-parser");

// ---------------------

// step 1
let sessionOptions = {
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionOptions));

// step2
app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query; //query object se name extract krna hai 
    req.session.name =name; // we are set to make new variable inside session called name 
    res.send(name); //send the name 
});

// step 3
app.get("/hello",(req,res)=>{
    res.send(`hello, ${req.session.name}`);  // issne session variable ko use kiya and hello print kiya 
});

// ---------------------






// -----------------------

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});