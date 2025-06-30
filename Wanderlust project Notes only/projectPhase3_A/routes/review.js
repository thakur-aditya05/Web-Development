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
let {isReviewAuthor}=require("../middleware.js");
// this middleware will help to get wheather the corrct author or not  




const reviewController = require("../controllers/reviews.js");
// post routes 
// Reviews Route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));








// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);



exports.module=router;


// https://expressjs.com/en/guide/routing.html