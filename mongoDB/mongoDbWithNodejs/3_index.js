const mongoose = require('mongoose');  //require

main() // return promise 
    .then ((res)=>{
        console.log("connection successfull") 
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema=new mongoose.Schema({
  name: String,
  email: String,
  age:Number,
})
const User=mongoose.model("User",userSchema);
// -------------------------------------------------------
// lets make 
// now lets start to save data in collections in dbs 

// user model  is like class
// class have object 
// similarly we will have documents from these models'class 

const user = new User({
  name: "Frank Green",
  email: "frank.green@example.com",
  age: 40,
});



// memroy me create ho gaya hai but insert nahi hua hai 
// > node 
// > .load 3_index.js
// > user1 (some valid value + "id" bhi mili hai jisko mongoose ne create kiya hai )
// By default, Mongoose adds an _id property to your schemas.
// to save this document 


await user.save(); // will return promise 
// [> db.users.find() 


const user2 = new User({
    name: "reen",
    email: "reen@example.com",
    age: 44,
});


await user.save()
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)})); // will return promise 
// they will return inserted data





// insert many 
// Insert multiple user documents
    await User.insertMany([
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 28,
      },
      {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        age: 35,
      },
      {
        name: "Carol Lee",
        email: "carol.lee@example.com",
        age: 22,
      },
      {
        name: "David Kim",
        email: "david.kim@example.com",
        age: 30,
      },
      {
        name: "Eva Brown",
        email: "eva.brown@example.com",
        age: 26,
      },
    ])
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)})); // will return promise 
// they will return inserted data


// jbb bhi insert krte hai tb tb operation buffering hoti hai 
// connection banne ke baad then call execute hota hai yani sara successfull hone wala kaam then ke under likhna chahiye jaise insertion deletionn updation 
// but mongoose operation buffering ka use krta hai yani wo pahle krne ka allow kr raha hai 