const express=require("express");
const app=express();

// some middleware who can send the response 


// not the single message will be reaching to routes 
app.get("/",(req,res)=>{
    res.send();
})



app.listen(port,(req,res)=>{
    console.log("server listening to the port 8080");
})


















