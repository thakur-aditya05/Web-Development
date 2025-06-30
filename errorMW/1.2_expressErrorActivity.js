// create an admin route and send an error with a 403 status code 


// "/admin" route will through new error with status code 403 


// importing express error
const ExpressError=require("./ExpressError");


let express=require("express");
let app=express();

app.get("/",(req,res)=>{
    res.send("hi i am root");
})



// hamne apne error ko kon se status and kon se message ke saath bhejna hai wo hmane khud ke liye decide kr liya hai 
// khud ke liye create kr liye hai 
// 
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is for bidden ");
})
app.use((err,req,res,next)=>{
    console.log("---------------Error3----i am   using next() which will call nest non error handler middlewware---------->");
    next(err);
})
app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);  
})






app.listen(port,(req,res)=>{
    console.log("app is listinging on the port ");
})








