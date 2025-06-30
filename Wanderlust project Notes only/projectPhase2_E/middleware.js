const Listing=require("./models/listing")
const Review=require("./models/listing")



const ExpressError = require("./utils/ExpressError.js");

const wrapAsync = require("./utils/wrapAsync.js");

const {listingSchema,reviewSchema} = require("./schema.js")

// to check the authentication wheater user was the part of the same session or not 
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthentication){ 

        // to redirect into current path where he want to access 
        req.session.redirectUrl=req.originalUrl  /// redirectUrl access this url where u want ///login page and /signUp page 

        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    }
    next();  // if authenticated just call next executable file
}



// we are making this middleware because ek baar login verified ho jane ke baad  session se variable distroy ho jate hai 
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){ 
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();  // if authenticated just call next executable file
}






// only owner can delete the listing not everyone 
// so 
module.exports.isOwner = async (req,res,next)=>{
    let {id}=req.params;

    // applying autthorization so that not everyone can edit my listing 
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you are not the owner of this listing ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}



module.exports.validateListing=(req,res,next)=>{
    let {error}= ListingSchema.validate(req.body) ; // we had defines that listing should be oobject and which is required and will have some para 
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next();
    }
}



// 
module.exports.validateReview=(req,res,next)=>{
    let {error}= reviewSchema.validate(req.body) ; // we had defines that listing should be oobject and which is required and will have some para 
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next();
    }
}




// only review author can delete its own review and know one can touch it 
module.exports.isReviewAuthor = async (req,res,next)=>{
    let {id,reviewId}=req.params;

    // applying autthorization so that not everyone can edit my listing 
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","you are not the owner of this review ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
