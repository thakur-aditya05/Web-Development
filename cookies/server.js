const express = require("express");
const app=  express()


// ---------------------------------------------
const cookiesParser=require("cookie-parser");

// middle ware  to parse the cookies 
// miiddle ware to parse the cookie
app.use(cookieParser());


// to send cookies
// step 1 (to send the cookie) 
app.get("/getcookie",(req,res)=>{

  res.cookie("greet","hello");  // console window --->application ---->storage -->cookies 
  res.cookie("greet","hello");  // console window --->application ---->storage -->cookies 
  res.cookie("greet","hello");  // console window --->application ---->storage -->cookies 
  // 

  res.send("sent your some cookies");
});

// how to access the cookies  // request ke pass cokies ki information hoti hi hoti hai 
// step 2 (to try the fetch the cookie) 
app.get("/",(req,res)=>{

  // to get access cookies 
  console.dir(req.cookies);  // undefined 
  // directly parse nahi kr skte abhi undifiend print kr raha tha 

  res.send("hi i am root");

})
// use cookie parser "cookie-parse"

// ------------------------------------------------------



// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});