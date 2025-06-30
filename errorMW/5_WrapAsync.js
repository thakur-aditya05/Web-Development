// --------
const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const { createDecipheriv } = require("crypto");
let port= 8080;
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override");
app.use(methodOverride("_method"))
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// ------------





// ------------------------------------------------------

// this function will take "function" as argument  and give the function in return whiich run the Your argument function with req,res and err and if err originated then call catch pair  
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err));
    }
}




// 1st route 
// to show all chats 
app.get("/chats",
    asyncWrap(async (req,res)=>{
    let chats=await Chat.find();  // chat.find is an asynchronous function means async-await keyword will be used 
    console.log(chats);
    res.render("index.ejs",)
}));
// 2nd  route 
app.get("/chats/new",
    asyncWrap((req,res)=>{
    res.render("new.ejs");
}));
app.post("/chats",
    asyncWrap((req,res)=>{ 
    let {from, to, msg}=req.body; 
    let newChat=new Chat({
        from: from,
        to:to,
        msg:msg,
        created_at:new Date(),
    }); 
    newChat.save().then((res)=>{console.log("chat was saved")}).catch((e)=>{console.log(e)}); // asynchronous process hai to async and await use krna padega  BUT jaha then-catch use ho raha hai waha asynch and await use krna jaruri nahi hai                                                                        
    console.log(newChat);
    res.redirect("/chats");
}));
// 3rd route 
// lets make edit route 
app.get("/chats/:id/edit", 
    asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs", {chat} );
})); 
// Update Route
app.put("/chats/:id",
    asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));
// 4th route 
// destroy route 
app.delete("/chats/:id",
    asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let deleteChat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));

// ---------------------------------------------------------








// for all call back 
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(port,()=>{
    console.log(`"app is listing on ${port}"`)
});
