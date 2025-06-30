// data.json  imported
// npm install express path 



const express = require("express");
const app=express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



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

