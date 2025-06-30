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


// --------------------------------------------------------------
// falti ke function yaha banemge  
// middleware function for validating schemas 


// --------------------------------------------------------------

// 1st route  Index Route
app.get("/listings",
    wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));


// 3rd route New route  
// 3rd  route part 1
// New Route
// no wrapasynch 
app.get("/listings/new",
    wrapAsync((req, res) => {
  res.render("listings/new.ejs");
}));



// 2nd route show route 
// Show Route
app.get("/listings/:id",
    wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// 3rd  route part 2
// create route 
app.post("/listings",
    wrapAsync( async (req,res)=>{
    // let {title,description,image, prices, country , location }=req.body;
    let result= ListingSchema.validate(req.body) ; // we had defines that listing should be oobject and which is required and will have some para 
    if(result.error){
        throw new ExpressError(400,result.error)
    }
    let listing = req.body.listing; // javascript object 
    const newListing= new Listing(listing)
    console.log(listing);

    await newListing.save();

    res.redirect("/listings");
}))



// 4 part1 
// edit route 
// make edit.ejs 
app.get("/listings/:id/edit",
    wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findByAndId(id);
    res.render("listing/edit.ejs", {listing} );
}));
 

// 4 route part 2 
// updating to Db 
app.put("/listings/:id",
    wrapAsync(async (req,res)=>{
    // if req body ke under listing nahi hui to uss case me ye trigger ho jayega 
    if(!req.body.listing){
        throw new ExpressError(400,"send valid Data for listings")
    }
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listings");
    res.redirect(`/listings/${id}`);
}))

// let make our delete route 
// distroye route 
app.delete("/listings/:id",
    wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);

    res.redirect("/listings");

}));





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
