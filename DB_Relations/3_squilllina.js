// users - posts relations 
// users  ke under millions posts nahi store kara skte but posts ke under    

// users under posts 




const { connect } = require("http2");
const mongoose=require("mongoose");

const {schema} = mongoose;

main()
.the(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("'mongodb://127.0.0.1:27017/test")
}

const  userSchema=new Schema({
    username:String,
    email:String,
});


const  postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

// creating models 
const User= mongoose.model("User",userSchema);
const post= mongoose.model("Post",postSchema);

// have a function to do some asych activities 
const addData1=async()=>{

    // user 1 
    let user1=new User({
        username:"aditya",
        eamil:"aditya@gmail.com",
    });
    
    let post1=new User({
        content:"hello World",
        likes:7,
    });

    post1.user=user1;

    await user1.save();
    await post1.save();

}


const addData2=async()=>{

    // user 1 
    let user1=await User.findOne({username:"aditya"})
    
    let post2=new User({
        content:"hello World2",
        likes:7,
    });

    post2.user=user1;

    await post2.save();

}

addData1(); // calling function 
addData2(); // calling function 

const getData2=async()=>{

    let result = await post.findOne({}).populate("user");
    let result1 = await post.findOne({}).populate("user","username");
    console.log(result);
    console.log(result1);
    
}
const del=async()=>{
    await post.findByIdAndDelete("98791qcwofwegcfec");
    await post.findByIdAndDelete("98791qcwofwegcfec");
};
del();

