// ----------------------------------
const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// issi lecture me hoppscotch ka bhi use kiya gaya hai
        // download chrome extension;  github/hoppscotch/discussion/2051

// for any type of incoming request  either get,post,put,delete        
app.use((req,res)=>{ 
    console.log("Hello World");
});
// >> node index.js ; server ko baar baar start krna padega,yes
// now: N open browser and type localhost:3000
// hoppscotch me: localhost:3000 likhna hai and send  get/post/delete request on  localhost:3000/help, 
// -----------------------------------














// --  ----------------
// lets learn about how to send resposnse to the client

// 1. response and request object
        // https://expressjs.com/en/4x/api.html
// 2. response object: https,string, respond send krta hai 
// 3. request object: convert http request to json string format
app.use((req,res)=>{ 
    console.log(req); // this will give you the details of the request object
    res.send("Hello World"); // this will send the http response to the client
    
    res.send({
        name: "Aditya",
        age: 20,
        address: "India",
    }) // this will send the  response to the client in json format

    // send with hoppscotch also

    res.send("<h1>Hello World</h1>"); // this will send the http response to the client


    // res.send() : 
});
















