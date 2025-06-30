let express=require("express");
let app=express();


// importing express error
const ExpressError=require("./ExpressError");










const checkToken=(req,res)=>{
    let {token } =req.query;
    if(token==="abc"){
        next();
    }
    throw new ExpressError(401,"ACCESS DEDINED") // caaling class by just giving two parameter 
}




// -----------------------------------------------
app.get("/",(req,res)=>{
    res.send("hi i am root");
})
// lets write 1st error handler 
app.get("/err",(req,res)=>{
    abcd=abcd;
});
// -----------------------------------------------



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

// status code 401 generate karwaya upper wale class ke 
// dekho hame /abcd me galaat token dala to ek cosutom error generate karaya and status code 401 ke saath 
// usske baad kuch middle ware ne liye and error handle kiya but finaaly pass kr diya uss error ko aage ke liye 
// jb isske pass aaay to "err" se mesage and status code liye orr ussko cliesnt side bhej diya 
// meessage bhi express error wale hai and status code bhi error wala hi hai  
app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);  
})
// error kaam kaise krta hai 
// if "/pages(ya invalid)" pe request dali to "err" object me koi status code nahi hai orr jb status wali line status code extract krne ki koshis krta hai to  undefined extract  ho jata hai 
// undefined nahi hona chahiye  nahi to 
// 
app.use((err,req,res,next)=>{
    let {status=500,message="yaha pe default value set ki ja rahi hai "}=err;
    res.status(status).send(message);  
})


// kya shikha hmne 
    // 1) khud ke error handling middle ware kaise create kr skte  hai 
    // 2) cliesnt side hamre choice se middleware kaise bhej skte hai 
    // 3) and kud ki error handling class kaise bana skte hai 
// ------------------------------------------------
















app.listen(port,(req,res)=>{
    console.log("app is listinging on the port ");
}) 