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
// collection banne ke baad database me database dikhayi deta hai 


// lets apply constarints and validate schema 
// amazon schema 
//      books eletronics beauty_product inn sabhi ka individual collection bana skte hai 
// books : Title, books_name,


// Schema type options  
        // https://mongoosejs.com/docs/schematypes.html
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true         // required is not null in sql 
    },
    author:{
        type:String,
    },
    prices:{
            type:Number,
    }
});


//  model or class creations 
//  collections form kr rahe hai iss time pe 
const Book = mongoose.model("Book", bookSchema);
// [> show dbs 
// [> show amazon
// [> show collections

let book1=new Book(
    [
    { title: "The Alchemist", author: "Paulo Coelho", prices: 15.99 },
    { title: "1984", author: "George Orwell", prices: 12.50 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", prices: 10.75 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", prices: 8.99 },
    { title: "Brave New World", author: "Aldous Huxley", prices: 11.20 }
]
)
await book1.insertMany().then((res)=>{
    console.log(err);
}).catch((err)=>{
    console.log(err);
});




let book2=new Book(
    { title: "The Alchemist", author: "Paulo Coelho", prices: 15.99 },
)
await book2.save().then((res)=>{
    console.log(err);
}).catch((err)=>{
    console.log(err);
});





let book3=new Book(
    { title: "The Alchemist", author: "Paulo Coelho", prices: abcd },
)
await book3.save().then((res)=>{
    console.log(err);
}).catch((err)=>{
    console.log(err);
});

// cast(parsing) error ka matlab ki number me cast nahi ho payi hai 
// yani number me convert nahi ho pa rahi hai  







let book4=new Book(
    { title: "The Alchemist", author: "Paulo Coelho", prices: "4545" },
)
await book3.save().then((res)=>{
    console.log(err);
}).catch((err)=>{
    console.log(err);
});
// issme casting error nahi aayegi kyo ye ("4545") string type (4545)number me convert ho jayegi  


// jo converion hai wo finally uss data type me convert ho jana chahiye jis cheeez ka validation datatype rakha gaya hai 















