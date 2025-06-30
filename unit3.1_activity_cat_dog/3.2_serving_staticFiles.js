

// lets learn how to serve static files in express
// html code ko render kr rahe hai 
// css javaScript logic  ko send krne ke liye 

// --------------------------------------
app.use(express.static(foldername)); // serving static files from public folder
// this foldername is the folder where we have our static files likes css, js, images etc
// byDefault "public" folder hota hai jisme humare static files  store hote hai 
// "views"  folder me humare dynamic files hote hai jisme humare ejs files hote hai
app.use(express.static("public")); // serving static files from public folder

// --------------------------------------





const express = require("express");
const app=express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));






// ---------------------------------------------------
// after learing from 3.2 serving_staticFiles.js 

// to run the server from only and only unit3.1_activity_cat_dog
app.use(express.static("public")); 


// to run from any directory 
app.use(express.static(path.join(__dirname,"public"))); 

// agar public ke under do folder bana liya to use case me  like css and js 
app.use(express.static(path.join(__dirname,"public/js"))); 
app.use(express.static(path.join(__dirname,"public/css"))); 
// ---------------------------------------------------
















// known 
app.get("/", (req, res) => {
    res.render("1_index");
}); // rendering the index.ejs file




// ---------------------------------------------------

app.get("/ig/:username", (req, res) => {
    let {username} = req.params; // getting the username from the url

    const instadata=require("./data.json"); // importing the data.json file
    // console.log(instadata); // printing the data.json file

    const data=instadata[username]; // getting the data of the username from the data.json file
    console.log(data); // printing the data of the username from the data.json file

    if(data){
        res.render("3.1_insta_activity", {data}); // rendering the index.ejs file
    }else{
        res.render("error.ejs"); // rendering the index.ejs file
    }
    
}); 
// ---------------------------------------------------



app.get("/hello", (req, res) => {
    res.send("hello ");
}); // rendering the index.ejs file



app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random() * 6) + 1; // random number between 1 to 6
    // res.render("2_rolldice",{num:diceVal}); // rendering the index.ejs file
    res.render("2_rolldice",{ diceVal });
}); // rendering the index.ejs file

 