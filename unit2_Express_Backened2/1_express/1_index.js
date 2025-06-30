// ------------------
// lets start working with express
// >> mkdir 1_express
    // >> npm init -y
    // >> npm install express 
    //>> touch index.js (act as server file)

    // https://expressjs.com/en/starter/hello-world.html prefer link 
    
const express = require('express') // express is a function 
const app = express() // app is an object(variable) of express function
// this app is used to create a  actual server


console.dir(app); // this will give you the details of the app object 
// -----------------










// --------------
 // lets create a simple server
// 1st work of express is to create a server and listen to the upcoming requests

let port = 3000; // coustom server ; 8080// port is a number which is used to identify the server 


// work flow : jaise hi koi request aayegi to ye call back function chalega
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// >> node index.js ; server ko baar baar start krna padega,yes 
// now: N open browser and type localhost:3000 

// --------------

