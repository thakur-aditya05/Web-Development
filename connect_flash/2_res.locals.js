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
// to use flash in better way 

app.use(flash());

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    req.flash("success", "user registered successfully!");
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    // console.log(req.flash("success")); // just to check ki flash msgs print ho raha hai ki nahi 
    res.locals .messages=req.flash("success") ; // response me  kocals ke under message naam ka variable banega and uss message me ye save ho jayega off fir uss message variable ko use kr skte hai 
    res.render("page copy.ejs", { name: req.session.name } ); // flash the success msg when key success is passed 
});




// -------------------------------------------