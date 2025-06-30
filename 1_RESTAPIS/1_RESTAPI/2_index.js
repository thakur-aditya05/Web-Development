const express= require("express");
const app=express();
const port = 8080;
const path=require("path");


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));



let posts = [
    {
        username: "aditya",
        content: "I'm using this WhatsApp"
    },
    {
        username: "aman",
        content: "Just joined the platform!"
    },
    {
        username: "sneha",
        content: "Learning JavaScript today."
    },
    {
        username: "ravi",
        content: "Building my first web app."
    },
    {
        username: "nisha",
        content: "Trying out TensorFlow for a project."
    }
];


//  1api
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})



// 2nd work to add new post
// form request 
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs"); // form render
})
// information  adding to posts
app.post("/posts",(req,res)=>{

    console.log(req.body);
    let {username, content} = req.body;
    posts.push({username,content}); // pushing--> {username:username, content:ccontent}

    
    // res.send("post request working ")
    res.redirect("/posts"); // by default get request hi bhejta hai 

})

// lets summerise this activity till this point 

// "/post" pe get request jate hi pura blog dikhayi dega 
// koi naya post create krna hai to "/posts/new" pahle requst bhejni padegi jo ek form render krwayeg or form render hone ke baad 
// form ko submit krna hoga orr usko subbmit krne ke baad 
// array me data store ko jayega and re.direct ho jayenge ("/posts") ki taraf 



app.get("/",(req,res)=>{
    res.send("serving working well");
});

app.listen((port,()=>{
    console.log("app is listiniing to the port : 8080");
}))