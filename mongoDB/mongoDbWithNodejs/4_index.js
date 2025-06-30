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

const user = new User({
  name: "Frank Green",
  email: "frank.green@example.com",
  age: 40,
});



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
      }
    ])
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)})); // will return promise 


// find opertaions 
// if there is no conditons inside find 
// model.find() // return a query object which is not promise but the thenable object means then and catch pair can be applied 
User.find({})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));


    
    
    
User.find({age:{$gte:47}})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));
    




User.findOne({_id:"65329vfv3vc2bnz63264j87s223"})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));




// ye bahut jada use hoga 
User.findById("65329vfv3vc2bnz63264j87s223")
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));



// Upadte 
// keval 1st document update ho jayega 
// Model.updateOne()
User.updateOne({name:"Bruce"}, {age:49})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));




// Upadte 
// saare document update ho jayega 
// Model.updateOne()
User.updateMany({age:{$gte:47}}, {age:47})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));



// query object ka matlab hota hai ki returnable is object where then and catch pair can be done 
// find and update  
// keval 1st document find and update ho jayega 
// Model.findOneAndUpdate()
User.findOneAndUpdate({name:"Bruce"}, {age:15})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));
// ye return karega old object 



// ye return karega updated object ka 
User.findOneAndUpdate({name:"Bruce"}, {age:15},{new:true})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));



// saare document update ho jayega 
// Model.updateOne()
User.findByIdAndUpdate({age:{$gte:47}}, {age:47})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));







// Delete
// model.findByIdAndDelete() // return count 
// model.findOne() // return count 
User.deleteOne({name:"Adam"})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));
    
    
    
// Delete
// model.deleteMany() // return count 
User.deleteMany({name:"Adam"})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));

User.deleteMany({age:{$gt:40}})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));


    
    
    
    
// Delete
 // model.findByIdAndDelete return value 
User.findByIdAndDelete("7das8da9sda5ds4asd5a4dsad")
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));
    
User.findOneAndDelete({age:{$gt:40}})
    .then((res=>{console.log(res)}))
    .catch((err=>{console.log(err)}));
    












