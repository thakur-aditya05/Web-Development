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



// -----------------------------------------




// -----------------------------------------
// some important validate listing 

// lets make validation for listing funtion 
const validateListing=(req,res,next)=>{
    let {error}= ListingSchema.validate(req.body) ; // we had defines that listing should be oobject and which is required and will have some para 
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next();
    }
}




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
    wrapAsync((req, res) => {
  res.render("listings/new.ejs");
}));






// 2nd route show route 
// Show Route
router.get("/:id",
    wrapAsync(async (req, res) => {
    let { id } = req.params;
    // const listing = await Listing.findById(id);
    const listing = await Listing.findById(id).populate("reviews");

    if(!listing){
        //  creating flash messages step 3.2 for use flash 
        req.flash("error","  Listing  does not exists ");
        res.redirect("/listings")    
    }
    res.render("listings/show.ejs", { listing });
}));






// 3rd  route part 2
// create route 
router.post("/",
    validateListing,
    wrapAsync( async (req,res)=>{
    // let {title,description,image, prices, country , location }=req.body.
    let listing = req.body.listing; // javascript object 
    const newListing= new Listing(listing)
    console.log(listing);

    await newListing.save();

    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    res.redirect("/listings");
}))






// 4 part1 
// edit route 
// make edit.ejs 
router.get("/:id/edit",
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
     validateListing,
    wrapAsync(async (req,res)=>{
    // if req body ke under listing nahi hui to uss case me ye trigger ho jayega 
    if(!req.body.listing){
        throw new ExpressError(400,"send valid Data for listings")
    }
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    // res.redirect("/listings");
    res.redirect(`/listings/${id}`); 
}))






// let make our delete route 
// distroye route 
router.delete("/:id",
    wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);

    //creating error flash messages step 3 for use flash 
    req.flash("success","New Listing deleted");

    res.redirect("/listings");

}));

module.exports = router;