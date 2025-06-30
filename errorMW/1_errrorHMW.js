// soch raha hu ye galat baat hai 
// mai fir se you tube pe zindagi search krne laga hu reels pe aagya mai 

// aise 


let express=require("express");
let app=express();

app.get("/",(req,res)=>{
    res.send("hi i am root");
})


// lets write 1st error handler 
app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    console.log("---------------Error1----i am   using next() which will call nest non error handler middlewware---------->");
    next();
})


app.use((err,req,res,next)=>{
    console.log("---------------Error2----i am   using next(err) which will call nest  error handler middlewware---------->");
    next(err);
})
app.use((err,req,res,next)=>{
    console.log("---------------Error3----i am   using next() which will call nest non error handler middlewware---------->");
    next(err);
})


// next() // will call next non error handler mW
// next(err) // will call next  error handler mW







app.listen(port,(req,res)=>{
    console.log("app is listinging on the port ");
})
