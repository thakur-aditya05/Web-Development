// get request ki limitation  
// limited string length in url 
// dusari baat uss url me saari sensetive information dikhayi dena 

// kb use krna hai : jb resposnse wapas chahiye hoga hme 
// resposnse retrive krne ke liye get reqest use karenge 


const express =require("express")
const app=express()
const port=8080;


app.get("/register",(req,res)=>{
    // get reqeust me jo data aata hai wo query string ke form me aata hai:, to usko nikalne ke liye 
    let {user,password}=req.query;
    // res.send("standard get response");
    res.send(`${username } having ${password}`);
});

app.post("/register",(req,res)=>{
    res.send("standard POST response");
});

app.listen("/register",(req,res)=>{
    console.log(`listing to the port${port}`)
});

// -----------------------
// send get and post request from hoppscotch
// parameter ke under body raw requests send kr skte hai   
// ---------------------------------------

























