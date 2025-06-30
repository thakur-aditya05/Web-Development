const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");

// requireing model 
const Chat=require("./models/chat.js");
const { createDecipheriv } = require("crypto");

let port= 8080;


// setting ejs to view engine 
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


// to set the styleing we need 
app.use(express.static(path.join(__dirname,"public")));


// to parse req body data we need to parse url encoded data
// i added this during post request during chats to db 
app.use(express.urlencoded({extended:true}));


// we had using ?_method=PUT so we have to require  method override
const methodOverride=require("method-override");
app.use(methodOverride("_method"))


// getting-started.js
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}





// 1st route 
// to show all chats 
app.get("/chats", async (req,res)=>{
    
    // lets bring all data from db 
    let chats=await Chat.find();  // chat.find is an asynchronous function means async-await keyword will be used 
    console.log(chats);
    // lest send this chats to our clients 

    // res.send("working");
    res.render("index.ejs",)

});



// 2nd  route 
// creating route for adding new chats 
// render form to enter chats details 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

// now lets save chats to Db 
app.post(".chats",(req,res)=>{
    // data extracted  from chats 
    let {from, to, msg}=req.body;

    // made new chats 
    let newChat=new Chat({
        from: from,
        to:to,
        msg:msg,
        created_at:new Date(),
    }); 

    // lets save new chats 
    newChat.save().then((res)=>{console.log("chat was saved")}).catch((e)=>{console.log(e)}); // asynchronous process hai to async and await use krna padega  BUT jaha then-catch use ho raha hai waha asynch and await use krna jaruri nahi hai                                                                        


    // print new chats 
    console.log(newChat);

    // see working
    // res.send("working");

    // re-direct to new page 
    res.redirect("/chats");

})





// 3rd route 
// lets make edit route 
app.get("/chats/:id/edit", async (req,res)=>{

    // lets 1st extract id 
    let {id}=req.params;

    // search chats based on id 
    // then pass the chat to edit.ejs file 
    let chat=await Chat.findById(id);


    res.render("edit.ejs", {chat} );
}); // now lets send put request so that we can finnaly update our chat as well in db 

// Update Route
app.put("/chats/:id", async (req, res) => {

    // lets extract id from routes
    let { id } = req.params;

    // lets extract msg from req body
    let { msg: newMsg } = req.body;

    // lets find and update chat according to id and apply schema validators and set to new function 
    let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
    );

    console.log(updatedChat);
    res.redirect("/chats");
});
// debugging ke time pe cheezo ko beech beech me print karayenge aise maine mam ko dekha krte hue 
// hmne ye updation ki need daali hai to created__at pada hu hai to updated_at bhi hona chahiye 
// wo homeWOrk probleum hai 



// 4th route 
// destroy route 
// delete btn press krne ke baad delete request jayegi  DELETE   "/chats/:id" ke pass and will delete chat with id 
// create a form having delete btn for every chat which on pressing will send delete request to the delete route 
// index.ejs me changes krne hai 
app.delete("/chats/:id",async(req,res)=>{

    //lets get the id which chat chat to be deleted 
    let {id}=req.params;

    // affter selecting id find and delete 
    let deleteChat=await Chat.findByIdAndDelete(id);

    console.log(deleteChat);

    // redirect 
    res.redirect("/chats");

    // homework to create pop message so to before to delete chat from data base
    // write logic in app.js in public folder 
    // yes  orr no 
    // try it now 

});








// for all call back 
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(port,()=>{
    console.log(`"app is listing on ${port}"`)
});
