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
app.get("/chats/:id/edit", async (req,res)=>{ 
    let {id}=req.params;
    let chat=await Chat.findById(id);  
    // jb chat empty hogi tabhi keval ye run nahi karega yani id same length but not found 
    // try-catch me id same length and id not defined to bhi try catch block work karega   
    if(!chat){
        // throw new ExpressError(404,"chat not found"); // .. will not work beacuse express will not call "next()" and if next nahi call hoga to error handling sahi nahi ho payegi 
        // so ab kya karegnege ki ab jo hai expresss ko explicity next call karenge 
        next(new ExpressError(404,"chat not found"));
    }
    res.render("edit.ejs", {chat} );
});
// in the step 4 in asynch type error handling exprrwss by deafult next call nahi krta hai to hamne next ke under error parse krna padega 
// id=monggose error is of length fixed type 
// id search krke uss type ki id na hona is different error 
// validation error 
// 


// step 2 Error handling middleware 
use((err,req,res,next)=>{
    let {status=500,message="async middleware "}=err;
    res.status(status).send(message);  
})






app.listen(port,(req,res)=>{
    console.log("app is listinging on the port ");
})








