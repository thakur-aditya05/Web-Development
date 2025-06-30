// yaha se sql backened  ko restfull apis me convert karenge and uske under different different route bannane wale hai 

// "/"  get request show no of user in db 
// "/user" get request show users (email id username ) ejs 
// patch "/user/:id" --> username edit 
// post "/user"-->new user
// DELETE "/user/:id"  --> user delete 


// my sql data base is very important 


const {faker} = require("@faker-js/faker");
const mysql = require("mqsql2");
const express = require("express");
const app=express();


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
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            // res.send(result[0]["count(*)"]);  // will give some error 
            res.send("success");
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});
// ------------------------




app.get("/",(req,res)=>{
    res.send("welcome to the home page ")
});

app.listen("8080",()=>{
    console.log("app is listning to the port ");
});