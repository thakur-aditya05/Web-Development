

// step 1
// 3rd route New route  
// 3rd  route part 1
// New Route
// no wrapasynch 
router.get("/new",
    wrapAsync((req, res) => {
        console.log(req.path, " .. .", req.originalUrl); // if 
        console.log(req) ; // yahi pe request object ko access k
        console.log(req.user);  // user related saari info saved ho jati hai // user ke login hone ke baad reqest objject me user related  info saved hoti hai or yahi trigger krti hai is authenticated ko to verify user 
    if(!req.isAuthentication){ 
        req.flash("error","you must be logged in to create listing");
        res.redirect("/login");
    }
  res.render("listings/new.ejs");
}));

// logout the users 
router.get("/logout",(req,res,next)=>{
        req.logout((err) => {// ekk mehod hai which tell what should be callback executed after just logouting the user  
        if(err){ // if error comming during the logout 
                return next(err);
        }
        req.flash("success", "you logged out from wanderlust again");
        res.redirect("/listings");
    });
})



// automatic sign up affter login 
//jaie shi user ek register user bn jaye waise hi autmatic sign  dede 
router.post("/signup", wrapAsync(async(req,res)=>{
        try{
                let {username, email, password}=req.body;//information req.body
                const newUser=new User({email, username});//models(class) ka use krke newUser document(objects) create kr lena  
                let registeredUser= await User.register(newUser, password ); 
                console.log(registeredUser); 
                // impotant
                req.login(registeredUser,(err)=>{
                        if(err){
                                return next(err);
                        }
                        req.flash("success", "welcome to wanderlust ");
                        res.redirect("/listings");
                }) 
        }catch(e){
                req.flash("error",e.message);
                res.redirect("/signup");
        }
}));



// post - login page 
// yani jaha login kiya wahi pe redirect kr do 
// !(important) request object affter login have lots of 


console.log(req.path, " .. .", req.originalUrl); 
// if the user is not login then we want ki 1st user login ho and usek baad redirect kr jaaye paths jisko usne access krne ki khosis ki 
// req object ke under session se related 