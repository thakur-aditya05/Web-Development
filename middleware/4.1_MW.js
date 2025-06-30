// hrr ek request ke saatth work kare 
// https://expressjs.com/en/guide/using-middleware.html



// path specify nahi kiya to saare paths ke liye work karega and paths specify kr diya to uss paaths ke liye keval work karega 

const express=require("express");
const app=express();






// sirf ye mw use kiya hai 
// return ko hamse return krte hhai 
app.use((req,res)=>{
    console.log("hi i am middleware "); 
    next();
    console.log("hi i am middleware faffter next  "); 
})



// ye accha trika nahi hai likhne ka 
// next ke baad middleware me koi event and koi kaam  nahi krwate hai 
app.use((req,res)=>{
    console.log("hi i am middleware "); 
    return next();
    console.log("hi i am middleware faffter next  "); 
})








app.get("/",(req,res)=>{
    res.send("i m root ");
})

app.get("/random",(req,res)=>{
    res.send("this is randome page");
})

app.listen(port,(req,res)=>{
    console.log("server listening to the port 8080");
})

