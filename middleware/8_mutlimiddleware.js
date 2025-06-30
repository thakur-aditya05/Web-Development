const express=require("express");
const app=express();






// --------------------------------------------------
// basic exmaple ki middle ware kaam kaise krta hai 
// authenticate krne ka kaam hoti hai 
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }else{
        res.send("access denied");
    }
}

// how to pass middleware as the function 
// 
app.get("/get",checkToken, (req,res)=>{
    res.send("data");
});
// ----------------------------------------------


app.get("/",(req,res)=>{
    res.send("i m root ");
})

app.get("/random",(req,res)=>{
    res.send("this is randome page");
})

app.listen(port,(req,res)=>{
    console.log("server listening to the port 8080");
})