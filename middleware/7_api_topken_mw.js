const express=require("express");
const app=express();

app.use((req,res)=>{
    let {query}=req.query;  // req body works likes get funtion req body 
    console.log(query);
    console.log("hi i am middleware "); 
    res.send("middle ware is sending response and no route can be matched ");  // work of mw is not to send response but to do some activity and pass the evnt 
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

// ------------------------------------------------------------
// jaise hame pata hai ki kuch route to free hote hai but kuch route pe signup krna padta hai 
// wo free nahi hote hai to particular route pe jb request aaye to acces token mange 
// "/api?token=373167261"-->return the true data 
// 


// basic exmaple ki middle ware kaam kaise krta hai 
// authenticate krne ka kaam hoti hai 
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }else{
        res.send("access denied");
    }
})

// iss tarah ke maanlo 10 root bana diya to unko ab protect krna padega na to unke liye upper middleware define
app.get("/get", (req,res)=>{
    res.send("data");
});










