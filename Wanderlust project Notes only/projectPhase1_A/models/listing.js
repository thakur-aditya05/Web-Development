// flow will be like that we will be making schema and model in this file and then exporting in appendFile.js and later in init.js file to to make document 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let link="sfnfoevonef";

const listingSchema = new Schema({
  title:{
     type:String,
     required:true,
  },
  description: String,

  image: {
    type:String,
    default:link, // ye options jb link hi nahi  bheja gaya ho 
    set:(v) => v ===""?link:v,  // jb bheja to gaya ho but empty 
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// default image 
// set:(v)=>v===""?link:v 



// required kr skte hai 
// kuch filed ke liye jaise title 






