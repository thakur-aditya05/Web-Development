const express = require("express");
const router =express.Router();

// require Schema
let User=require("../models/user.js");


// rquire Wrapasync
const wrapAsync = require("../utils/wrapAsync.js");

// ..............
const passport=require("passport");

const {saveRedirectUrl}=require("..middleware.js/");




router.get("/signup",(req,res)=>{
        res.send("users/signup.ejs");
});



router.post("/signup", wrapAsync(async(req,res)=>{

        try{
                let {username, email, password}=req.body;//information req.body

                const newUser=new User({email, username});//models(class) ka use krke newUser document(objects) create kr lena  
                
                let registeredUser= await User.register(newUser, password );
                
                console.log(registeredUser);
                
                // affter sign up user must get loggin autmatic 
                req.login(registeredUser,(err)=>{
                        if(err){
                                return next(err);
                        }
                        // if there is no error then 
                        req.flash("success", "welcome to wanderlust ");
                        res.redirect("/listings");
                })  // userinfo , callback[]

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
        saveRedirectUrl, // taki session clear hone se pahle store ho jaye session ke varibles 
    passport.authenticate("local", { failureRedirect:"/login", failureFlash:true}) , // wiill automatically recheak the 
        async(req,res)=>{
        req.flash("success","welcome to wanderlust! ");

        let  redirectUrl=res.locals.redirectUrl || "/listings" ;
        
        res.redirect(redirectUrl);
        }
);
        
        



// logout the the users 
// these are the routes for logout 
router.get("/logout",(req,res,next)=>{
        req.logout((err) => {// ekk mehod hai which tell what should be callback executed after just logouting the user  
        if(err){ // if error comming during the logout 
                return next(err);
        }
        req.flash("success", "you logged out from wanderlust again");
        res.redirect("/listings");
    });
})





module.exports=router;



