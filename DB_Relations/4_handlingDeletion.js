// hadling deletion in relation and 

// issko do type soch skte hai 
    // 1stly)    if we delete any document from one collection then all documents of other collection also deleted 
    // 2ndly)   if we delete any document from one collection then non documents of other collection  deleted related to the same documents







// when there are more data points so that they cant be stored in side its parent schema then 


// then we store particular order  id inside user schema od document which will be acting as the refernace for that order 

// -----
const mongoose = require('mongoose');
const {Schema}=mongoose;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
// ------------------------------------------------
const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// ------------------------------------------------

// ------------------------------------------------
// creating userSchema  
const Customer = mongoose.model("Customer",customerSchema);
const Order = mongoose.model("Order", orderSchema);

// adding data inside users 
const addCustomer = async () => {
    
    // making customer 1
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });
};
addCustomer();
const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "Samosa", price: 12 },
        { item: "Chips", price: 10 },
        { item: "Chocolate", price: 40 },
    ]);
    console.log(res);
};
addOrders();



// to print handling deletion 
// ussing middleware 


// add order in custmer account

const addCust=async()=>{
    let newCust=new Customer({
        name:"singh",
    });
    let newOrder=new Order({
        item:"Pizza",
        price:250,
    });
    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("oder is saved in coustmer block ")

}
addCust();


// delete 
const delCust=async()=>{

    // customer deleted but order id will not be deleted 
    let data=await Customer.findByIdAndDelete("98791qcwofwegcfec");
    console.log(data);
};
delCust();

// but we want ki order bhi delete ho jaye with costmer 

// middleware ke under 
// pre connect and post connect middleware ke saath koi bhi findById naam ka function nahi hai but if we go and see findByIdAndDelete it internally calls findOneAndDelete to iff isske liye
//  moongoose middleware defined kiya 
// findByIdAndDelete-->findOneAndDelete-->to isske liye kuch bana diya jo trigger ho rahi hai to 

Schema.pre("findOneAndDelete",async ()=>{
    console.log("Pre MiddleWare");
})
Schema.post("findOneAndDelete",async ()=>{
    console.log("post MiddleWare");
})

// jaise hi hamara customer delete ho jaye to usske baad hamare order delete ho jaye 
// to hmm custmor ke delete ke hone ke baad delete krwana chahte hai 

Schema.post("findOneAndDelete",async (data)=>{
    console.log(data); // this is data sended by findByIdAndDelete
    //  
})


customerSchema.post("findOneAndDelete",async (custmor)=>{
    if(custmor.orders.length){
        let res=await Order.deleteMany({_id:{$in:custmor.orders}});
        console.log(res);
    }
});


// same thing can be do with users and post 
// jaise hhi ek user delete ho jaye waise hi saare posts usse related 
// users and post ka schema 
// deletion isspe matter krta hai ki hmm apne users me schema kasie rakhna chhate hai 
// 