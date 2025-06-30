const express = require("express");
const app=  express()



// ---------------------------------
const cookiesParser=require("cookie-parser");

// we send andy key inside cookieParser like here we are sending  "secret"
app.use(cookieParser("secretcode"));


app.get("/getsignedcookie",(req,res)=>{   
    
    // to check either we getting signed cookie or not we send signed value true  
    res.cookie("made-in" , "india" , {signed:true});
    res.send("signed cookie sent");

});

app.get("/verify",(req,res)=>{

    console.log(req.cookies); // only print unsigned cokies 

    console.log(req.signedCookies); // only print signed cookies // if intrupped then print empty object and if not intruppted we get key value pair // or print false when we chage just value 

    res.send("verified");
    
})

// ------------------------------------------

























// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");
const cookieParser = require("cookie-parser");

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});