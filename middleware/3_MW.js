// hrr ek request ke saatth work kare 
// https://expressjs.com/en/guide/using-middleware.html



// path specify nahi kiya to saare paths ke liye work karega and paths specify kr diya to uss paaths ke liye keval work karega 

const express=require("express");
const app=express();

app.use((req,res)=>{
    let {query}=req.query;  // req body works likes get funtion req body 
    console.log(query);
    console.log("hi i am middleware "); 
    res.send("middle ware is sending response and no route can be matched ");  // work of mw is not to send response but to do some activity and pass the evnt 
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

