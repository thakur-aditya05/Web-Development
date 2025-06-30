// hrr ek request ke saatth work kare 
// https://expressjs.com/en/guide/using-middleware.html



// path specify nahi kiya to saare paths ke liye work karega and paths specify kr diya to uss paaths ke liye keval work karega 
// hrr request ke liye use honge wo get request ho ya delete post update request
// even paath sahi ho ya galata middlware kaam karega hi karega 



const express=require("express");
const app=express();



// now lets study about NEXT parameter 
// types of middle ware 
// error handling middle ware 
// builtin middleware 
// third party middle ware 
// cookies parser 


// https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503
// 


// sirf ye mw use kiya hai 
app.use((req,res)=>{
    console.log("hi i am middleware "); 
    next(); // yaha middleare ne apna kaam kiya uske baad request aage forward kr di hai 
        // yaha mw ke kaam  ho jane ke baad route se matched ho jayegi 
})





// ussing pairs of 2 middlewares  
app.use((req,res)=>{
    console.log("hi i 1st  middleware "); 
    next(); 
})
app.use((req,res)=>{
    console.log("hi i 2nd  middleware "); 
    next(); 
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

