// express having some deafult error handler 
// sytanx error 
// 

// development stage 
// production stage  duw data base or extrnal map stage error real time error 
// production stage error ko handle krne ke liye 
// 





const express=require("express");
const app=express();



// ---------------------------------------------------------
app.get("/wrong",(req,res)=>{
    abcd=abcd;
})
// this will print error stack trace 
// The default error handler
// https://expressjs.com/en/guide/error-handling.html 

// to change error msg 
// throw new error acess denied 
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }else{
        throw new Error("i am throwing my error "); //ye error msg to hmne bheja hai but issko handle express hi kr raha hai 
        // jaruri nahi hai ki error msg galt  ke karan hi jaaye kabhi kabhi jaan bhuj ke krna padta hai 
    
    }
}

// how to pass middleware as the function 
// 
app.get("/get",checkToken, (req,res)=>{
    res.send("data");
});

// hamare code le under error generate hote hai and unhe handle krna jaruri hai 
// by the way express ke pass by deafult error handler hota hai but hmm bhi apni side se defult error handler de skte hai 
// jisnko custom handler bolte hai custom error error class bana ke handle kiya ja skta hai 


// ---------------------------------------------------------




app.get("/get", (req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("i m root ");
})

app.get("/random",(req,res)=>{
    res.send("this is randome page");
})

app.listen(port,(req,res)=>{
    console.log("server listening to the port 8080");
})







// db third party service hai google maps bhi 3rd party servics hai 





// --------------------------
// Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.
// ----------------------------
// stack traces ye batata hai ki error kaha se generate hua and fir kaise kaise propogate hua 
// deafult middle ware sbse last me add ho jata hai 

// 
// -------------------------------------------
