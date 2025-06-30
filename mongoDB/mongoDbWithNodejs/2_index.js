// getting-started.js
const mongoose = require('mongoose');  //require

//  mongoose.connect("mongodb://127.0.01:27017/test")  // commented 21 



//mongoose ek object hai jiske under "connect"(key-value-pair-hai) naam ka function(async function hai ) hai  jo hamre database se connect krne ka try kr raha hai 

// helping our js file to connect with our db and here it is connecting to our "test(mongodb://127.0.01:27017/test)" database 

// Database(test)-->Collections(table)--->document(rows)

// node index.js 
// ctrl+c to stop the server 


// .connect("mongodb://127.0.01:27017/test") ==> async function start karega jo khud apana alag time lenge execute hone ke liye wo system ke line ke upper depand nahi karenge 


// issliye upper wali line comment kr ke ye likha 


main() // return promise 
    .then ((res)=>{
        console.log("connection successfull") 
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


// ye blue print tayar ho gaya hai ,  ab sabhi document issko madde nagar rakhte hue kaam karenge 
// oops me se ye smjho ki hmm class bana rahe hai 
const userSchema=new mongoose.Schema({
  name: String,
  email: String,
  age:Number,
})


// lets create and know model
// models help in creations of dcumnts 
// agar hame collections ke liye documnt create krna hai to model class ka use krnte hai 

const User=mongoose.model("User",userSchema);
// const model_name=mongoose.model("collection_name",Document_schema)

// model is like class (js class) which represent ki collections kaisa dikhne wala hai 


// -----
// nodemon index.js 
// [>show Collections  (in mongooshell ) yeha pe name automatic plural ho jata hai 
// -----
const Employee=mongoose.model("Employee",userSchema);
// -----
// nodemon index.js 
// [>show dbs (in mongooshell ) yeha pe name automatic plural ho jata hai 
// -----

// now we are capable to intract with mongodb and make changes 
