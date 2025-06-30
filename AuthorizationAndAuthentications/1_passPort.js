// https://www.passportjs.org/packages/  
// stratagies means how we want loggin  

// to install npm i passport https://www.npmjs.com/package/passport
// https://www.npmjs.com/package/passport-local m install passport-local
// https://www.npmjs.com/package/passport-local-mongoose passport local mongoose 


// teeno ek saath implement kr skte hai 
// gmail se bhi login de skte hai 
// insta handle bhi login de skte hai 
// git account se bhi login kr skte hai 


// step 1 create users model 
// with basic deatails username password email 
// models ke under user.js
const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new Schema({email: {type:String,required:true}});
userSchema.plugin(passportLocalMongoose);   // username,password,hashing and salting implemting kr dega apne side se 
module.exports = mongoose.model('User', userSchema);
// You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.



// step2 
// require passport, localStratagy, and user model in this.apply.js 
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js")


// step3 session middleware  ke just  baad 
// to just initialise passport oneTime with everyRequest 
app.use(passport.initialize()); 

// step 2
// every route must have information about each and every session so to track the session by the requesting route taki baar baar signUp and login na krna pade   
app.use(passport.session());


// step 3 
// 
passport.use(new LocalStrategy(User.authenticate()));

// step 4
// ye line userko ki info session stored krta hai and 
passport.serializeUser(User.serializeUser());
// iss line se usser ki information session se hatayi jati hai 
passport.deserializeUser(User.deserializeUser());


// step 5 
// aiming to just use to add new users inside db 
app.get("/demouser",async(req,res)=>{

    // create fakeUser  
    let fakeUser = new User({  //bs naya user crate kr rahe isski help se 
        email:"thakuradityasingh@mail.com",
        username:"delta-student", // we are using pluging of mongoose locals which automatic addd username 
    });
    
    let registeredUser= await User.register(fakeUser,"helloworld");  // register method take fakeUser, and passWord 
    res.send(registeredUser);

});
// go on /demoUser
// register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if username is unique. 



