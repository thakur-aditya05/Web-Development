// to insert the data in bulk 
// using faker 
// to insert 100user data in single run 

const mysql = require('mysql2'); // requiring my sql 2 

const connection = mysql.createConnection({
    host: 'localhost',    
    user: 'root',             
    database: 'test',         
    password:  "adityasingh",     
});


import { faker } from '@faker-js/faker';

// useerid username email password so delete rest of all thing 
let getRandomUser=()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ]
}


// ------------------------------------------------------------------
// inserting the query 
let data=[];

for (let i = 1; i <= 100; i++) {

    // console.log(getRandomUser());

    data.push(getRandomUser()); //pushing randome users data 100 length 

}

// this is the query  
let q_100= "INSERT INTO user (id, username, email, password) VALUES ?";
try{
    connection.query(q_100,[data],(err,result)=>{
        if (err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}
connection.end(); 
// to veryfy 
// mysql> SELECT * FROM user;



