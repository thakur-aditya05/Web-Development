const express = require("express");
const router =express.Router();

// require Schema
let User=require("../models/user.js");


// rquire Wrapasync
const wrapAsync = require("../utils/wrapAsync.js");

// ..............
const passport=require("passport");


router.get("/signup",(req,res)=>{
        res.send("users/signup.ejs");
});



router.post("/signup", wrapAsync(async(req,res)=>{

        try{
                let {username, email, password}=req.body;//information req.body

                const newUser=new User({email, username});//models(class) ka use krke newUser document(objects) create kr lena  
                
                let registeredUser= await User.register(newUser, password );
                
                console.log(registeredUser);
                
                req.flash("success", "welcome to wanderlust ");
                
                res.redirect("/listings");
        }catch(e){
                req.flash("error",e.message);
                
                res.redirect("/signup");
        }

}));



// these are the routes for loggin
// will serve the form for logging 
router.get("/login",(req,res)=>{
        res.render("/users/login.ejs");
})





// will do authoriztion and authentication  
router.post("/login",
    passport.authenticate("local", { failureRedirect:"/login", failureFlash:true}) , // wiill automatically recheak the 
    async(req,res)=>{
        req.flash("success","welcome to wanderlust! ");
        res.redirect("/listings");
});



module.exports=router;



