const express = require("express");

const app = express();

const path = require("path"); // importing path module // meantion the resoun from 


const port = 3000;


app.set("view engine", "ejs"); // setting the view engine to ejs
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("1_index");
}); // rendering the index.ejs file


app.get("/hello", (req, res) => {
    res.send("hello ");
}); // rendering the index.ejs file



app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random() * 6) + 1; // random number between 1 to 6
    // res.render("2_rolldice",{num:diceVal}); // rendering the index.ejs file
    res.render("2_rolldice",{ diceVal });
}); // rendering the index.ejs file












