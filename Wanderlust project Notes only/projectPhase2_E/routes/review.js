const express = require("express");

// basicaally id is not able to transport it self from from main file to sub file then so to merge id(parent route ) with child route 
const router = express.Router({mergeParams:true});

// -------------------------------------
// lets requires some important files and folder so that workabel file can be downloaded 

// lets require wrapAsync
const wrapAsync=require("../utils/wrapAsync.js");//

// lets require listing schemas 
const {listingSchema, reviewSchema}=require("../schema.js"); // 2nd step for serverside validation //

// lets require expressError 
const ExpressError=require("../utils/ExpressError.js");//

// lets require schema mongoose wala 
const Listing=require("../models/listing.js");//


// lets require review validation schemas 
const Review=require("../models/review.js");//to require review model taki rating wagaira le sake 






// -----------------------------------------




// -----------------------------------------
// some important validate listing 


// lets make validateReview for review funtion 
let {validateReview, isOwner}=require("../middleware.js")



// ---------------------------------
// is logged in middleware 
let {isLoggedIn}=require("../middleware.js")



// ---------------------------------
// is isAuthor in middleware 
let {isReviewAuthor}=require("../middleware.js")
// this middleware will help to get wheather the corrct author or not  




// post routes 
// Reviews Route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(async (req, res) => {
      // gives undefined "req.params.id" without {mergeParams:true}
  const listing = await Listing.findById(req.params.id);

  const newReview = new Review(req.body.review);

  listing.reviews.push(newReview); // Add review to listing's reviews array

    newReview.author=req.user._id;  // author associated hona chahiye with revies 


  await newReview.save(); // Save the review document
  await listing.save();   // Save the updated listing

    //creating error flash messages step 3 for use flash 
    req.flash("success","New Review created");

  res.redirect(`/listings/${listing._id}`); // Redirect to listing's detail page
}));








// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;


    // Remove the review reference from the listing's reviews array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete the actual review document from the Review collection
    await Review.findByIdAndDelete(reviewId);

     //creating error flash messages step 3 for use flash 
    req.flash("success","New Review deleted");

    // Redirect back to the listing page
    res.redirect(`/listings/${id}`);
  })
);



exports.module=router;


// https://expressjs.com/en/guide/routing.html