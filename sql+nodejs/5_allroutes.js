

const {faker} = require("@faker-js/faker");
const mysql = require("mqsql2");
const express = require("express");
const app=express();
const path=require("path");


// to make ejs files 
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));




// setting up connection 
const connection = mysql.createConnection({
    host: 'localhost',    
    user: 'root',             
    database: 'test',         
    password:  "adityasingh",     
});

let getRandomUser=()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ]
}
// ------------------------
// lets make the 1st route to print table 
// get / fetch and show total number of the users on our app

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            // res.send(result[0]["count(*)"]);  // will give some error 
            let count=result[0]["count(*)"];

            res.render("home.ejs",{count});

        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// show route 
// get request on /users fetch and show (userId username email) of all users 
// Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, users) => {
            if (err) throw err;

            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});
// ------------------------


// ------------------------
// creating our ROUTES 
// edit routes  basically in two stages 
// GET /user/:id/edit // to get form to the username, based on id this form will require a password 

// patch /user/:id to edit username, if correct password was entered in form 

//edit button 
// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]);
            let user=result[0] ;
            res.render("edit.ejs",{user});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});


// just send patch request to edit just some part of users data 
// update route acctual uodat eyaha se hoga 
// we will search user bassed on id 
// check if form.password == paassword 
// update username 
// UPDATE (DB) Route

// do query lagengi pahli query me data extract krna padega and 
// 2nd query esle block ke under lagengi jisme data update krne ke liye fir se data updaet karenge 
// 
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        if (formPass != user.password) {
            res.send("WRONG password");
        }else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
        }
    });
} catch (err) {
    console.log(err);
    res.send("some error in DB");
    }
});

// ------------------------
// ------------------------
// add /user post 
// delete route /delete of correct 
// ------------------------







app.get("/",(req,res)=>{
    res.send("welcome to the home page ")
});

app.listen("8080",()=>{
    console.log("app is listning to the port ");
});