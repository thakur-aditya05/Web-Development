const express = require("express");
const router = express.Router();





// -------------------------------------
// lets requires some important files and folder so that workabel file can be downloaded 

// lets require wrapAsync
// "../" 
// lets require listing schemas 
// "../" 
// lets require expressError 
// "../" 
// lets require listing model 
// "../" 


// "../" 

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("./models/Listing.js");



// lets require middlware 
const {isLoggedIn}=require("../middleware.js") // to check the authentication 


// lets require isOwner
const {isOwner}=require("../middleware.js") // to check the authentication 




// lets require isOwner
// -----------------------------------------




// -----------------------------------------
// some important validate listing 

// lets make validation for listing funtion 
const {validateListing}=require("../middleware.js") // to check the authentication 



// -----------------------------------------











// 1st route  Index Route
router.get("/",
    wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));





// 3rd route New route  
// 3rd  route part 1
// New Route
// no wrapasynch 
router.get("/new",
    isLoggedIn , // 
    wrapAsync((req, res) => {
        console.log(req.user); // user related saari info saved ho jati hai // user ke login hone ke baad reqest objject me user related  info saved hoti hai or yahi trigger krti hai is authenticated ko to verify user 

    res.render("listings/new.ejs");
}));






// 2nd route show route 
// Show Route
router.get("/:id",
    wrapAsync(async (req, res) => {
    let { id } = req.params;
    // const listing = await Listing.findById(id);
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");// this line was added after review page is render at very last --->jo saare riews hai unko populate krna hai (yani saare ids ko deatil se refresent krwana hai  )
    // we get reviesw and owner name like this 

    if(!listing){
        //  creating flash messages step 3.2 for use flash 
        req.flash("error","  Listing  does not exists ");
        res.redirect("/listings")    
    }
    console.log(listing)
    res.render("listings/show.ejs", { listing });
}));






// 3rd  route part 2
// create route 
router.post("/",
    isLoggedIn,
    validateListing,
    wrapAsync( async (req,res)=>{
    // let {title,description,image, prices, country , location }=req.body.
    let listing = req.body.listing; // javascript object
    
    const newListing= new Listing(listing)
    console.log(newListing);
    
    newListing.owner=req.user._id; // id of the user 

    await newListing.save();

    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    res.redirect("/listings");
}))






// 4 part1 
// edit route 
// make edit.ejs 
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findByAndId(id);   

        // LISTING IF do not exists then we cant edit 
        if(!listing){
        //  creating flash messages step 3.2 for use flash 
        req.flash("error","  Listing  does not exists ");
        res.redirect("/listings")    
    }

    res.render("listing/edit.ejs", {listing} );
}));





// 4 route part 2 
// updating to Db 
router.put("/:id",  // 1st match the route then validate wheather the listong is true then find any eror in listoing 
    isLoggedIn,
    isOwner,   // kya user loggin hone ke baad owner hai ya nahi 
     validateListing,
    wrapAsync(async (req,res)=>{
    
    let {id}=req.params;

    // applying autthorization so that not everyone can edit my listing 

    
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    // res.redirect("/listings");
    res.redirect(`/listings/${id}`); 
}))

 




// let make our delete route 
// distroye route 
router.delete("/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);

    //creating error flash messages step 3 for use flash 
    req.flash("success","New Listing deleted");

    res.redirect("/listings");

}));

module.exports = router;