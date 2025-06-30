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
// order chema create kiya  taki order_id genrate kiya ja sake 

const orderSchema = new Schema({
    item: String,
    price: Number,
});
const Order = mongoose.model("Order", orderSchema);
// inserting data inside db 
const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "Samosa", price: 12 },
        { item: "Chips", price: 10 },
        { item: "Chocolate", price: 40 },
    ]);
    console.log(res);
};
addOrders();
// ------------------------------------------------


// ------------------------------------------------
// creating userSchema  
const customerSchema = new Schema({
    name: String,
    // we need to store order_id instend of whole object 
    // for which we 1st need to define data type which we are doing
    // 
    orders: [
        {

            type: Schema.Types.ObjectId,
            // jaha se order id leni hai wo referance hai 
            ref: "Order",
        },
    ],
});
const Customer = mongoose.model("Customer",customerSchema);

// adding data inside users 

const addCustomer = async () => {
    
    // making customer 1
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });

    // extracting complete object from order 
    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Chocolate" });
    
    // PUSHING Complete  object of order in side custmor  
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    // saving the data of custmer one 
    let result = await cust1.save();
    console.log(result);

    // outcome will be very intresting is that 
    // console print will be like pshing whole object inside user parent 
    // but if go and will check reality inside DB from mongo shell we will find ki sirf id inserted hua hai 

};

addCustomer();
// ------------------------------------------------



// ------------------------------------------------
// lets print customer information 
let result2=await Customer.find({});
console.log(result2);
// ------------------------------------------------



// ------------------------------------------------
// lets print customer information 
// with extracted data 
let result3=await Customer.find({}).populate("orders");
console.log(result3);
// ------------------------------------------------



















