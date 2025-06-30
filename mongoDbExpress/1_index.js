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




// getting-started.js
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}




// lets insert some data 
let chat1=new Chat({
    from: "alice@example.com",
    to: "bob@example.com",
    msg: "Hey Bob, how are you?",  // msg should be msg beacoz  it is case sensative 
    created_at: new Date()  // UTC formatted date and time 
});
// text which are not  the pparts of schema will not be saved 
chat1.save().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});



// for all call back 
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(port,()=>{
    console.log(`"app is listing on ${port}"`)
});
