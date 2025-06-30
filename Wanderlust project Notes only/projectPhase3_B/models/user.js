const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({// ab apna user scehem define krne ki baat aati hai to user scema define krte hai 
    email: {
        type:String,
        required:true,//yani honi hi honi chahiye nahi to error aayega storing ke samaye 
    },
    // name:String,// we cann add both of these feilds but there is plugins exists wich automatially stores ussername 
    // password:      //we cann add both of these feilds but there is plugins exists wich automatially stores ussername and hashed password

});
  userSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('User', userSchema);


