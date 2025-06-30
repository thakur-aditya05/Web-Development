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
// -------------------------------------------------------




// -------------------------------------------------------
// =====just testing server by manualling inserting data from "mYsqlworkbench"
// A simple SELECT query


try{
    // connection object jiske under query naam ka function hota hai jiska kaam hai mysql me koi query run krwana 
    // 
    connection.query("SHOW TABLES",(err,result)=>{
        if (err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}
// will return array of objects and all array properties are/will be applied  
connection.end(); // kyo ki command run krne ke baad bhi connnection khatam nahi hota hai 


// hmae jabardasti conection end krna padega 

// connection form karo  and uske baad se thme query related kaam krna hai 
// command  line se table and data access kr kste hai 
// -------------------------------------------------------







// https://www.npmjs.com/package/@faker-js/faker  
// generate fake data and always unique  

import { faker } from '@faker-js/faker';

 
// useerid username email password so delete rest of all thing 
let getRandomUser=()=>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log(getRandomUser());

