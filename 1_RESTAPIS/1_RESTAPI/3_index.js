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
id:"1a",
        username: "aman",
        content: "Just joined the platform!"
    },
    {
id:"1b",
        username: "sneha",
        content: "Learning JavaScript today."
    },
    {
id:"1c",
        username: "ravi",
        content: "Building my first web app."
    },
    {   
        id:"1d",
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
    posts.push({username,content});
    res.redirect("/posts"); 
})

// 3rd api SHOW ROUTE 
// GET /posts/:id to get one post (using id );
// add id to all array index 
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);

    // let find the post based on id 
    let post =posts.find((p)=>id===p.id);
    console.log(posts);

    // res.send("request working");
    res.render("show.ejs",{ post });

});
// uuid package implementation 
// https://www.npmjs.com/package/uuid
// npm install uuid

app.get("/",(req,res)=>{
    res.send("serving working well");
});

app.listen((port,()=>{
    console.log("app is listiniing to the port : 8080");
}))