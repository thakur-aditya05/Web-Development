const express = require("express");
const router =express.Router();

// require Schema
let User=require("../models/user.js");


// rquire Wrapasync
const wrapAsync = require("../utils/wrapAsync.js");

// ..............
const passport=require("passport");

const {saveRedirectUrl}=require("..middleware.js/");


//    


// 

let userController=require("../controllers/users.js")

// -------------------------------------------------
// router.get("/signup",userController.renderSignupForm);

// router.post("/signup", wrapAsync(userController.signup));

// // these are the routes for loggin
// // will serve the form for logging 
// router.get("/login",userController.renderLoginForm)

// // will do authoriztion and authentication  
// router.post("/login",
//         saveRedirectUrl, // taki session clear hone se pahle store ho jaye session ke varibles 
//     passport.authenticate("local", { failureRedirect:"/login", failureFlash:true}) , // wiill automatically recheak the 
        
//     userController.login
// );

// // logout the the users 
// // these are the routes for logout 
// router.get("/logout",userController.logout)
// -------------------------------------------------











// -------------------------------------------------
// 

router.route("/signup")
        .get(userController.renderSignupForm)
        .post( wrapAsync(userController.signup));

router.route("/login")
        .get(userController.renderLoginForm)
        .post(saveRedirectUrl,passport.authenticate("local", { failureRedirect:"/login", failureFlash:true}) ,userController.login );

router.get("/logout",userController.logout);
// -------------------------------------------------




module.exports=router;



