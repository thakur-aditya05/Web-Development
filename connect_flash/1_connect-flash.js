// connect-flash : 


//  1. Required Modules
const express = require("express");
const app = express();
// Initializes the Express framework.
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// Imports custom route modules for users and posts.
const session = require("express-session");

// step 3
const flash = require("connect-flash");

// Enables session management and flash messages (e.g., success/failure alerts).
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
// to use flash 
//step 1
// https://www.npmjs.com/package/connect-flash 
// step 2
// flash use krne se pahle session ko use krna jaruri hai 

// step 4 
app.use(flash());

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    // step 4 flash have two type of argument one is key when we have to print the message and 2ndly what messahe to be printed 
    req.flash("success", "user registered successfully!");


    res.redirect("/hello");
});

// step 6 
app.get("/hello", (req, res) => {
    console.log(req.flash("success"));
    res.render("page.ejs", { name: req.session.name, msg: req.flash("success")  }); // flash the success msg when key success is passed 
});

// step 7 access this message in page.ejs

// msg ek baar aayega flash karega and chalajeyga 
// -------------------------------------------