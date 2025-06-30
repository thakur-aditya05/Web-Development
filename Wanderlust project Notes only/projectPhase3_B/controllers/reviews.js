      
const Listing=require("../models/listing.js");//

const Review=require("../models/review.js");//to require review model taki rating wagaira le sake 

module.exports.createReview=async (req, res) => {
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
}





module.exports.destroyReview=async (req, res) => {
    let { id, reviewId } = req.params;


    // Remove the review reference from the listing's reviews array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete the actual review document from the Review collection
    await Review.findByIdAndDelete(reviewId);

     //creating error flash messages step 3 for use flash 
    req.flash("success","New Review deleted");

    // Redirect back to the listing page
    res.redirect(`/listings/${id}`);
  };


