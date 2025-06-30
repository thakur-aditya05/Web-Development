const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const User=require("./user.js");




const reviewSchema = new Schema ({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

});


const Review=mongoose.model("Review",reviewSchema);//"Review"----> collection ka nandaam hai and  Review model ka naam hai 
module.exports=Review;//Review--->ek document kaise dikhayi dega 
