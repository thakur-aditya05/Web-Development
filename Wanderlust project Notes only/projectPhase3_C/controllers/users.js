let User=require("../models/user.js");





// 
module.exports.renderSignupForm=(req,res)=>{
        res.send("users/signup.ejs");
}


module.exports.signup=async(req,res)=>{

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

}

module.exports.renderLoginForm=(req,res)=>{
        res.render("/users/login.ejs");
}

module.exports.login=async(req,res)=>{
        req.flash("success","welcome to wanderlust! ");

        let  redirectUrl=res.locals.redirectUrl || "/listings" ;
        
        res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
        req.logout((err) => {// ekk mehod hai which tell what should be callback executed after just logouting the user  
        if(err){ // if error comming during the logout 
                return next(err);
        }
        req.flash("success", "you logged out from wanderlust again");
        res.redirect("/listings");
    });
};