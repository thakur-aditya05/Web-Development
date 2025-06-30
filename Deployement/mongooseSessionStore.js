

// step 1
// to store session storing
// we are going to use connect-mongo based session storage 
// cookies, userRealtedTokes of session, expery dates 


// step 2 (https://www.npmjs.com/package/connect-mongodb-session)
// install packages  npm i connect-mongo

// step 3
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo');
// at the time of depoyement 
const store=MongoStore.create({ 

    // mongoUrl:dbUrl,  //MONGO_URL

    mongoUrl:MONGO_URL,  //MONGO_URL
    
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
});

//  ...................................session  option 
const sessionOptions={
    store:store,
    secret:process.env.SECRET,
    saveUninitialized:true,
    resave:false,
    Cookie:{
        expires:Date.now()+7*24*60*60*100,
        maxAge:7*24*60*60*100,
        httpOnly:true,
    },
};




// step 4
//   "engines": {
//     "node": "20.11.1"
//   },




// step 5
// to ignore all thse things 
// .gitignore file 
# ye file push nahi hongi git ke upper 
.env
.vscode/
area.cpp
classroom/
node_modules/
notes/
#  **/.ds_store ----> kahi kisi folder ke under dikh jaye ds_storeusko waha se hata dena 





















