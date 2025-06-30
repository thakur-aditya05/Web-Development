
const express =require("express")
const app=express()
const port=8080;

// -----------------------------------------------
// ussing post req body parser for ONLY url encoded  
app.use(express.urlencoded({extended:true}));
// ussing post req body parser for ONLY JSON encoded  
app.use(express.json());
// -----------------------------------------------

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`${username } having ${password}`);
});

app.post("/register",(req,res)=>{
    // console.log(req.body);

    let {user,password}=req.body;

    // res.send("standard POST response");
    res.send(`${username } having ${password}`);
});

app.listen("/register",(req,res)=>{
    console.log(`listing to the port${port}`)
});

// -----------------------
// step 1 request object  naam ke under ek "body" naam ki key  hoti  hai  jisse under se data nikal skte hai
// step 2 express ko unhi pata hota hai ki body ke under konsi type ka deta hai ==> so parse this data that is that is readbale to express == 
// step 2 without this === undefined   BUT    app.use(express.urlencoded({extended:true})); data get parsed
// express.urlencoded ==>url encoded data parsed krke smjh jaao 

// by default
// agar koi bhi parser use nahi kr rahe hai to 
// req.body undefined value hi dega yani wo kisi bhi type ka data read nahi karega 

// ---------------------------------------
























