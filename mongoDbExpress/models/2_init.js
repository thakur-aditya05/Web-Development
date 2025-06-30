const mongoose=require("mongoose");

// requireing model 
const Chat=require("./chat.js");

// getting-started.js
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1=new Chat({
    from: "alice@example.com",
    to: "bob@example.com",
    msg: "Hey Bob, how are you?",
    created_at: new Date()   
});

chat1.save().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

// -------------------------------
const allChats = [
  {
    from: "alice@example.com",
    to: "bob@example.com",
    msg: "Hey Bob, how are you?",
    created_at: new Date("2025-05-21T09:00:00Z"),
  },
  {
    from: "bob@example.com",
    to: "alice@example.com",
    msg: "Doing well, Alice! You?",
    created_at: new Date("2025-05-21T09:02:00Z"),
  },
  {
    from: "charlie@example.com",
    to: "david@example.com",
    msg: "Meeting at 4 PM, don't forget.",
    created_at: new Date("2025-05-21T10:15:00Z"),
  },
  {
    from: "david@example.com",
    to: "charlie@example.com",
    msg: "Got it, see you then!",
    created_at: new Date("2025-05-21T10:16:00Z"),
  },
  {
    from: "emma@example.com",
    to: "frank@example.com",
    msg: "Are you free for a quick call?",
    created_at: new Date("2025-05-21T11:30:00Z"),
  },
  {
    from: "frank@example.com",
    to: "emma@example.com",
    msg: "Yes, call me in 5 mins.",
    created_at: new Date("2025-05-21T11:31:00Z"),
  },
  {
    from: "grace@example.com",
    to: "harry@example.com",
    msg: "Thanks for your help earlier.",
    created_at: new Date("2025-05-21T12:45:00Z"),
  }
];

// Insert them all at once
Chat.insertMany(allChats)
  .then((res) => {
    console.log("Chats inserted:", res);
  })
  .catch((err) => {
    console.error("Error inserting chats:", err);
  });

// node init.js 
// iss file ko bs keval kuch data kko initialise krne ke liye use kr rahe hai 
// isssliye 1stly we have formm connection from our shell and then we reqire model from other file and then we puted some 
// schema ke according ki data hona chahiye if it will be not then there we have storage of data 
// close this file 


// flow
// setup connection 
// require model 
// insert or save data 