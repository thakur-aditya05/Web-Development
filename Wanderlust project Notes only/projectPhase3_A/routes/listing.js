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









// ----------------------------------------------------------------
const listingController=require("../controllers/listings.js")
// 1st route  Index Route
// router.get("/",
//     wrapAsync(listingController.index));

//     // 3rd route New route  
//     // 3rd  route part 1
//     // New Route
//     // no wrapasynch 
//     router.get("/new",
//         isLoggedIn , // 
//         wrapAsync(listingController.renderNewForm));
        
//         // 2nd route show route 
//         // Show Route
//         router.get("/:id",
//             wrapAsync(listingController.showListings));
            
//             // 3rd  route part 2
//             // create route 
//             router.post("/",
//                 isLoggedIn,
//                 validateListing,
//                 wrapAsync(listingController.createListing));
                
//                 // 4 part1 
//                 // edit route 
// // make edit.ejs 
// router.get("/:id/edit",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.renderEditForm));
    
//     // 4 route part 2 
//     // updating to Db 
//     router.put("/:id",  // 1st match the route then validate wheather the listong is true then find any eror in listoing 
//         isLoggedIn,
//         isOwner,   // kya user loggin hone ke baad owner hai ya nahi 
//         validateListing,
//         wrapAsync(listingController.updateListing))
        
//         // let make our delete route 
//         // distroye route 
//         router.delete("/:id",
//             isLoggedIn,
//             isOwner,
//             wrapAsync(listingController.destroyListing));
            
// ----------------------------------------------------------------







// affter router.routes use case 


// 
router.route("/")
       .get(wrapAsync(listingController.index))
        .post(
            isLoggedIn,
            validateListing,
            upload.single('listing[image]'),
            wrapAsync(listingController.createListing));



////new route  
router.get("/new",
    isLoggedIn , // 
    wrapAsync(listingController.renderNewForm));



//.......
router.route("/:id")
    .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing))

    .put(  // 1st match the route then validate wheather the listong is true then find any eror in listoing 
    isLoggedIn,
    isOwner,   // kya user loggin hone ke baad owner hai ya nahi 
     validateListing,
    wrapAsync(listingController.updateListing))

    .get(wrapAsync(listingController.showListings))


//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));











module.exports = router;