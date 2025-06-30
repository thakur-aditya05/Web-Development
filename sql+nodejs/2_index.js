// through .SQL file 

// CREATE TABLE user (
//     id VARCHAR(50) PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password VARCHAR(100) NOT NULL
// );




// -------------------------------------------------------
// https://www.npmjs.com/package/mysql 
// https://sidorares.github.io/node-mysql2/docs
const mysql = require('mysql2'); // requiring my sql 2 

// Create the connection to database
// there must be connection exixst with mysql database  
const connection = mysql.createConnection({
  host: 'localhost',    // always root users 
  user: 'root',             // name of the users  like aditya 
  database: 'test',         // name of the database 
  password:  "adityasingh",     // passsword jo staring se hi dalte hai 
});



// inserting new data 
// basis of the PLACEHOLDER 
let q="INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";
let user = [
  "u123",                     // id
  "rahul_kumar",             // username
  "rahul.kumar@example.com", // email
  "securePassword123"        // password
];
// 1stlt connection.query will run "q" query and if it find any placeholder then question marks values will get replaced 
// from the USER array data 
try{
    connection.query(q,user,(err,result)=>{
        if (err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}
connection.end(); // kyo ki command run krne ke baad bhi connnection khatam nahi hota hai 

// to veryfy 
// mysql> SELECT * FROM user;



// If you want to insert multiple users, you can use an array of arrays:
// array of the array 

let q2="INSERT INTO user (id, username, email, password) VALUES ?";

let users = [
  ["u123", "rahul_kumar", "rahul.kumar@example.com", "securePassword123"],
  ["u124", "neha_singh", "neha.singh@example.com", "pass456neha"],
  ["u125", "amit_verma", "amit.verma@example.com", "amitPwd789"]
];

try{
    connection.query(q2,[users],(err,result)=>{
        if (err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}
connection.end(); 
// to veryfy 
// mysql> SELECT * FROM user;

