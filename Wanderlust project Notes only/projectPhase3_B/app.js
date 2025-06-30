if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}


const express = require("express");
const app=express();
const mongoose=require("mongoose");

// let require path 
const path= require("path");

// importing Listing model 
const Listing =require("./models/listing.js")

// importing wrapasync 
const wrapAsync=require("./utils/wrapAsync.js");

// importing express classs  
const ExpressError=require("./utils/ExpressError.js");


// i import listing joe schema validation after which all dinvidual validation be applied 
const {ListingSchema, reviewSchema}=require("./schema.js"); 

// importing reviews schema 
//to require review model taki rating wagaira le sake 
const Review=require("./models/review.js");



// importing listing routes 
const listingRouter = requires("./routes/listing.js");

// lets require reviews  routes paths 
const reviewRouter=require("./routes/review.js");






// affter learning session 



// lets require session 
// step 1 of express-session
const session =require("express-session");


// lets require session 
// step 1 to use flash 
const flash=require("connect-flash");








// lets require userRouter 
const userRouter=require("./routes/user.js")




const MongoStore = require('connect-mongo');











// require area ends here 
// -------------------------------------------------------------------------
// building the setup with mongoose shell so that we can insert data update the data delete the data 
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// caliing the functon 
main()
    .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
    await mongoose.connect(MONGO_URL);
}
// > show dbs



// mongooose connection end here 
// ---------------------------------------------------------




// --------------------------------------------------------------
// will defined all middle ware function here 

// to include view  folder 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


// to parse url encoded data from body for express
app.use(express.urlencoded({extended:true}));



// for method Override 
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


// in phase 2 lets require ejs-mate 
const ejsMate=require("ejs-mate");   // rednuncy hatate hai // nave baar issi ki wajaha se implment ho paya hai 
app.engine('ejs',ejsMate); // compelte includes ke jaise hai 



// lets serve static files 
app.use(express.static(path.join(__dirname,"/public")));
// --------------------------------------------------------------




// at the time of depoyement 
const store=MongoStore.create({ 

    // mongoUrl:dbUrl,  //MONGO_URL

    mongoUrl:MONGO_URL,  //MONGO_URL
    
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
});

//  ...................................session  option 
const sessionOptions={
    store:store,
    secret:process.env.SECRET,
    saveUninitialized:true,
    resave:false,
    Cookie:{
        expires:Date.now()+7*24*60*60*100,
        maxAge:7*24*60*60*100,
        httpOnly:true,
    },
};




// ----------------------------------------------------------------------

// session ke baad ki cheeze yaha rakhenge 
// step 2 for express-session
// const sessionOptions = {
//     secret: "mysupersecretstring",
//     resave: false,
//     saveUninitialized: true,
//     cookie:cookie,  // affter the line  
// };
app.use(session(sessionOptions));

// step 2 to use flash
app.use(flash());





// step 3 express-session 
// to verify weather the session is working or not 
// console window ---> application ---> storage ------>cookies --> connect.sid


// step 4 express-session with cookie (step 1 cookies )
let cookie={
    expires:Date.now() +7*24*60*60*1000,  // itne second ke baad cookies expires ho jayegi 
    maxAge:7*24*60*60*1000,
    httpOnl:true,  // used in security purpose // crossScripting attacks hote hai  
}

// itna hi session ka use hota hai 


// ############3
// lets  
// step 3 :  use flash
app.use((req,res,next)=>{
    res.locals.success=req.flash("success"); // access in index.ejs
    res.locals.error=req.flash("error"); // access in index.ejs

    // this is not flash but we cant acces request body in ejs template that is way we are storing req body in locals variable 
    res.locals.currUser=req.user;

    // calling next 
    next();
})





// ----------------------------------------------------------------------



// --------------------------------------------------------------
// falti ke function yaha banemge  
// middleware function for validating schemas 




// lets make validation for listing funtion 



// lets make validateReview for review funtion 








// --------------------------------------------------------------
// all  listings related routes 




app.use("/listings",listingRouter);








 



// -------------------------------------------------
// reviews routes 






app.use("/listings/:id/reviews",reviewRouter)





// ---------------------------------


// loginand signUp case 
app.use("/",userRouter);




// ------------------------
// index route 
app.get("/",
    (req, res) => {
    res.send("Hi, I am root");
});


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"<h1>Page Note Found!</h1>"));
});

// custom error handler try-catch block for all an
app.use((err,req,res,next)=>{
    //deconstructing express error 
        let {statusCode=500,message="sorry error caused"}=err;
        res.status(statusCode).render("error.ejs",{err});
});



// app is listinging to the port 
app.listen(port,()=>{
    console.log(`server is listning to the port ${port}`);
})
