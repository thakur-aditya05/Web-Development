// schema validation 
// basically, rules for Schema 

// sql schema 
// cols --> name, datatype, constraints 



// 
// books Schemas 
// 


// ye require kr rahe hai 
const mongoose = require('mongoose');  //require


// connection establishment 
main()
    .then ((res)=>{
        console.log("connection successfull") 
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

// Schema type options  
        // https://mongoosejs.com/docs/schematypes.html
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true, // This field is mandatory (like NOT NULL in SQL)
  },
  author: {
    type: String, // Optional string field
  },
  price: {
    type: Number,
    // we can defined error message if validation is not fined is true 
    min: [1, "please enter a valid price"], // Must be ≥ 1 // else error message will be preinted "please enter a valid price"
  },
  discount: {
    type: Number,
    default: 0, // If no discount provided, default is 0
  },
  genre: [String], // Array of strings (e.g., ["Sci-Fi", "Drama"])
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], // Only allowed values
  },
});



// enum ka matlab hai ki : 
// innke alwa koi orr value nahi hi skti hai 


// schema validation during update 
// 

// we are saying that validation does not obeys in update query 
bookSchema.findByIdAndUpdate("7s8ads7da8sda7s8da8sd7as7d8",{price:-500})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
    
    
    // run validators : set to true so that schema validation can applied to this updation query 
    
bookSchema.findByIdAndUpdate("7s8ads7da8sda7s8da8sd7as7d8",{price:-500},{runValidators:true})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
    
    
    // handling error 
    // in schema validation 
    console.log(err.errors.category.properties.message);
    
    
    
    bookSchema.findByIdAndUpdate("7s8ads7da8sda7s8da8sd7as7d8",{price:-500},{runValidators:true})
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            console.log(err.errors.price.properties.message)
        });
// hrr ek error ke liye coustom validation create kr skte hai 

