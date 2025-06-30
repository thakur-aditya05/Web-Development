const express = require("express");
const app=  express()
// after using route files 
const users = require("./routes/users");
const posts = require("./routes/posts");





// ---------------------
// step 1
// npm i express-session (https://www.npmjs.com/package/express-session)

// step 2
let  session = require('express-session')

// step 3
app.use(session({
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
}));




// app.get("/reqcount",(req,res)=>{
//     req.session.count = 1;  // hrr cliesnt and server ke beech me session store kiya jayga 
//     // in same type pof session we are makeing variable  
//     res.send(`you sent a request ${req.session.count} times` );
// });

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1; // ye variable to bn gaya but temporary storage hai 
        // but different different session storage bhi aate hai
        //  https://www.npmjs.com/package/express-session  (Compatible Session Stores)
    }
    res.send(`you sent a request ${req.session.count} times` );
});






// step 4
app.get("/test",(req,res)=>{
    res.send("test successful ! ");
})










const cookieParser = require("cookie-parser");

app.use("/users", users); 
app.use("/posts", posts);

app.listen(ports,()=>{
    console.log("server is working");
});