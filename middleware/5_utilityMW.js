// creating utility middleware 
// logger usefull information ko console ke upper print krne me help krta hai 
// hrr request ke saath associated method (get post delete )
// logger file 
// kis time pe response bheja gaya wo print kara skte hai 





const express=require("express");
const app=express();



// logger  (npm packages also exist which do same work well known "morgan")
app.use((req,res,next)=>{

    // lets print request body 
    console.log(req);
    
    console.log(req.method);  // we get type of request  // send reqest from hoppscoct 

    console.log(req.hostname); 
    console.log(req.path); 

    // !@ important ye power sirf request ke pass hoti ha ki wo reqest body ko manuplate kr skta hai 
    // jaise 
    // req.time=Date.now();  // not readable form of date 
    req.time=new Date(Date.now()).toString();  //  yes it is readable form of date 

    console.log(req.time); 


    return next();
    // middleware last me nahi likh skte hai kyo logic ke hisab se koi na koi route request route ke saath
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

