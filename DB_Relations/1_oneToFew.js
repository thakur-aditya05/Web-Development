// basic set up krne ke baad 

// single to may ka relation hai to issme parent ke under child store krne wale hai 
// each row connenteed with one unique primary key 



const mongoose = require('mongoose');

const {Schema}=mongoose;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

// creating  userschema 

// way 1 for one to few 
const userSchema = new Schema({
    username: String,

    // chiled document ke under ky aky ahona chahiye 
    addresses: [
        {   
            // mogonsoose generating id for every adresss so if we dont need that particular id for every address then 
            _id:false, // for no to id 

            location: String,
            city: String,
        },
    ],
});

// cretaing model 
const User = mongoose.model("User", userSchema);

// adding single document 
const addUsers = async () => {
    let user1 = new User({
        username: "oneclappingtimes",
        addresses: [
            {
                location: "221B Baker Street",
                city: "London",
            },
        ],
    });

    // one more address object inside same users 
    user1.addresses.push({ location: "23 Wall Street", city: "London" });
    // saveing the data called result 
    let result = await user1.save();
    console.log(result);
};

addUsers();

// node user.js 
// mongodb ne address ke liye bhi automatic field create kr di hai  



// way 2 embedding address schema under user schema for creating one to few realtion er schema  