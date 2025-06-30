const express = require("express");
const app=express();
const mongoose=require("mongoose");

// let require path 
const path= require("path");

// importing Listing model 
const Listing =require("./models/listing.js")







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
// but still dbs  will  not be saved beacause we hadnt created any colections till now 




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
// make layouts of views paarent of 



// lets serve static files 
app.use(express.static(path.join(__dirname,"/public")));







// ----------------------------------
// lets check weather my mongoose connection is working or not
app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    });
    
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});
// use wanderlust 
// show collections
// db.listing.find()
// 
// ----------------------------------


// 1st route  Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});


// 3rd route New route  
// 3rd  route part 1
// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});



// 2nd route show route 
// Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});


// new route is placed above new route because directing link of show route is "/listings/:id"  and that of
// and that of new route /listings/new so new get considered as id so new is used to find listing by id 

// 3rd  route part 2
// create route 
app.post("/listings", async (req,res)=>{
    // let {title,description,image, prices, country , location }=req.body;

    // but 
    let listing = req.body.listing; // javascript object 
    const newListing= new Listing(listing)
    console.log(listing);

    await newListing.save();

    res.redirect("/listings");
})



// 4 part1 
// edit route 
// make edit.ejs 
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findByAndId(id);

    res.render("listing/edit.ejs", {listing} );
})
 

// 4 route part 2 
// updating to Db 
app.put("/listings/:id",async (req,res)=>{
    let {id}=req.params;

    // extract the listing for this find by id and update 
    await Listing.findByIdAndUpdate(id, {...req.body.listing});

    res.redirect("/listings");

    // but let re direct to show route 
    res.redirect(`/listings/${id}`);

})

// let make our delete route 
// distroye route 
// 
app.delete("/listings/:id",async (req,res)=>{
    
    // abstract id 
    let {id}=req.params;
    
    // lets delete but affter extracting 
    let deleteListing = await Listing.findByIdAndDelete(id);
    // console.log(deleteListing);

    res.redirect("/listings");

});





// index route 
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});



// app is listinging to the port 
app.listen(port,()=>{
    console.log(`server is listning to the port ${port}`);
})
