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
app.use(session({secret:"mysupersecretstring"}));
// connect.sid  sid session id for current session 
// isska kaam ye hoga ki for each and every route it will store some session id 
// tab1=/test =>sid ="5dw5d5sds5d0",  tab2=/test=>sid="5dw5d5sds5d0" chrome  
// tab1=/test =>sid ="12345678qw",  tab2=/test=>sid="12345678qw" safari 


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