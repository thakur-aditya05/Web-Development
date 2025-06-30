const express = require("express");
const app=  express()


// ---------------------------------------------
const cookiesParser=require("cookie-parser");


// miiddle ware to parse the cookie
// pparsing 

app.use(cookieParser());


// to send cookies
// sending 
app.get("/getcookie",(req,res)=>{

  res.cookie("name","aditya singh ");  // console window --->application ---->storage -->cookies 
  // console window --->application ---->storage -->cookies 
  // 

  res.send("sent your some cookies");
});

// accessing 
app.get("/greet",(req,res)=>{

  let {name ="anonymous"} = req.cookies;

  res.send(`hi my name is ${name}`);
})


// ------------------------------------------------------



// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});