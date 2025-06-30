// connect-flash : 
const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");



//  View Engine Setup
app.set("view engine", "ejs");
// Sets the template engine to EJS (Embedded JavaScript), for rendering dynamic HTML.
app.set("views", path.join(__dirname, "views"));

// Session Configuration
const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));



// -------------------------------------------
// to use flash in better way  inn actitvity if if login access is success fulll then print somthin and if login fails then print else

app.use(flash());

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if(name==="anonymous"){
        req.flash("error","user not registered");
    }else {
        req.flash("success", "user registered successfully!");
    }
    
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {

    // no not need to pass it explitcitly they are store in res.local variable of specific name 
    res.locals.success=req.flash("success") ;
    res.locals.error=req.flash("error") ;

    res.render("activity.ejs", { name: req.session.name } ); 

});

// -------------------------------------------

















// -------------------------------------------
// to use flash in better way  inn actitvity if if login access is success fulll then print somthin and if login fails then print else

app.use(flash());
// 3rdbest way to use flash 
app.use((req,res,next)=>{
    // locals variable ke under do variable bana raha hu and save them and call next  
    res.locals.success=req.flash("success") ;
    res.locals.error=req.flash("error") ;
    next();
})




app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if(name==="anonymous"){
        req.flash("error","user not registered");
    }else {
        req.flash("success", "user registered successfully!");
    }
    
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {

    res.render("activity.ejs", { name: req.session.name } ); 

});

// -------------------------------------------