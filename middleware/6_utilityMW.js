// app.use ke if no path then it will response to all type of request 
// 


const express=require("express");
const app=express();





// these two lines have same meaning 
app.use((req,res,next)=>{});
app.use("/",(req,res,next)=>{});






// ------------------------------------------------------------
app.use("/random",(req,res,next)=>{
    
    console.log("i m middleware for random ");
    return next();
    // middleware last me nahi likh skte hai kyo logic ke hisab se koi na koi route request route ke saath
})


// api/listings ==/listings  

// agar signup and login krwana hai to middleware ke under hi signup and login krwa skte hai just to proctect specific route 
// validation layer login and signup layers inn sabhi ko agar dalna hai to use kr kste hai 
// ------------------------------------------------------------






app.get("/",(req,res)=>{
    res.send("i m root ");
})

app.get("/random",(req,res)=>{
    res.send("this is randome page");
})




// ------------------------------------------------------------
// this is type of middleware to defined error type 
// for specific use only 
app.use((req,res,next)=>{
    // res.send("route not found ")
    res.status(404).send("route not found ");
})

// ------------------------------------------------------------




app.listen(port,(req,res)=>{
    console.log("server listening to the port 8080");
})

