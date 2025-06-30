// validation error: jb feild required  ho to orr hmne empty value store karane ki hosis ki to validation error aata hai 
// id is of different lenth hona (undefined deta hai )
// id of same length but uska na milna is differenet things (error deta hai )

// validation error is handle with try and catch block 


// importing express error
const ExpressError=require("./ExpressError");


let express=require("express");
let app=express();


// step3 send some custom error 
app.get("/synchError",(req,res)=>{
    throw new ExpressError(404,"synch error is send "); // will work synch error 
    res.send("hi i am root");
})


// step4 send some error from Async route   
app.post("/chats",(req,res)=>{
    try{
    let {from, to, msg}=req.body;
    let newChat=new Chat({
        from: from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });    
    newChat.save().then((res)=>{console.log("chat was saved")}).catch((e)=>{console.log(e)}); // asynchronous process hai to async and await use krna padega  BUT jaha then-catch use ho raha hai waha asynch and await use krna jaruri nahi hai                                                                        
        res.redirect("/chats");
    }catch(e){
        next(err) //calling to ddeafult error  // ye status and message dono send kr dega to nest error handling middleware 
    }
})

// try-catch ne validation error ko detect kiya catch ne error message ko catch kiya 
// fir wo messages deafult error msg ko send kr diya gaya 
// yani asynch fution me dono cheeze add krni padti hai "TRY - CATCH pair" , "next ko call krke error message trough krna "
// at the end subkuch error handling middleware ko hi thow hoga jo last me laga rakjha 
//  




// step 2 Error handling middleware 
use((err,req,res,next)=>{
    let {status=500,message="async middleware "}=err;
    res.status(status).send(message);  
})
// -----------------------------------------------------

app.listen(port,(req,res)=>{
    console.log("app is listinging on the port ");
})








