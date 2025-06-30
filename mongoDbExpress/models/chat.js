// kyo ki issko require karenge 1_index.js me na ki index.js ko require kr rahe hai yaha pe 


const mongoose=require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    from:{
        type:String,
        required:true,
    },
    msg:{                       
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date,
        required:true,
    },
});

const Chat = new mongoose.model("Chat",chatSchema)

module.exports=Chat;

