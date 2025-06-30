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


app.use((err,req,res,next)=>{
    console.log(err.name); // trying to print name 
    next(err); // call next error handling middle ware 
})
// we can do special printing for spcial error 

app.use((err,req,res,next)=>{
    console.log(err.name); 
    if(err.name==="ValidationError"){
        console.log("this was a validation error, Please follow rules ");
    }
    next(err); 
})


// ek kaam orr kr skte hai ki 
const handleValidationErr=(err)=>{
    console.log("this iis validation error plz fill with correct value ");
    console.dir(err);
    console.log(err.message);
    return err;
}
app.use((err,req,res,next)=>{
    console.log(err.name); 
    if(err.name==="ValidationError"){
        err=handleValidationErr(err);
    }
    next(err); 
});

// error  
// error ko backened me jhelna aana chahiye 
// iss file and wrap asynch type and 1st : bs issi taraka se error ko handle kiya jata hai 
