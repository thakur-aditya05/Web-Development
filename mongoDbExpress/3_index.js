const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");

// requireing model 
const Chat=require("./models/chat.js");

let port= 8080;


// setting ejs to view engine 
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


// to set the styleing we need 
app.use(express.static(path.join(__dirname,"public")));








// getting-started.js
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}






// to show all chats 
app.get("/chats", async (req,res)=>{
    
    // lets bring all data from db 
    let chats=await Chat.find();  // chat.find is an asynchronous function means async-await keyword will be used 
    console.log(chats);
    // lest send this chats to our clients 

    // res.send("working");
    res.render("index.ejs",)

});





// for all call back 
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(port,()=>{
    console.log(`"app is listing on ${port}"`)
});
