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
    // type:String,
    // default:link, // ye options jb link hi nahi  bheja gaya ho 
    // set:(v) => v ===""?link:v,  // jb bheja to gaya ho but empty 

        // this is affter ccloudnary 
        url:String,
        filename:String,


  },
  price: Number,
  location: String,
  country: String,

  reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"//Review-->this is model name jaha se id ko copy krni hai 
        },
    ],


    // for listing authorization 
    owner:{
        type:Schema.Types.ObjectId,
         ref:"User"//User-->this is model name jaha se id ko copy krni hai 
    },
});


listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){// agar listings object aati hai tabhi ye kaam krna hai nahi to nahi 
            await Review.deleteMany({_id:{$in:listing.reviews}}); //unn reviews ko delete krna hai jo hamari listing ke reviews ke under id form me hai yani........"listing.reviews"ke nder jo bhi arrays hai unpr ek ke kr ke traverse karenge ($in: isska mtab yahi hota hai ) and to wo id wala pura ka pura Riview delet jo jayega   
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// default image 
// set:(v)=>v===""?link:v 



// required kr skte hai 
// kuch filed ke liye jaise title 






