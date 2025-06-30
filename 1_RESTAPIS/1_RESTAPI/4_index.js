const express= require("express");
const app=express();
const port = 8080;
const path=require("path");


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

// importing uuids 
const  { v4 : uuidv4 }= require("uuid");

// https://www.npmjs.com/package/method-override
// method override 
let  methodOverride = require('method-override')
app.use(methodOverride("_method"));

let posts = [
    {
        id:uuidv4(),
        username: "aditya",
        content: "I'm using this WhatsApp"
    },
    {
        id:uuidv4(),
        username: "aman",
        content: "Just joined the platform!"
    },
    {
        id:uuidv4(),
        username: "sneha",
        content: "Learning JavaScript today."
    },
    {
        id:uuidv4(),
        username: "ravi",
        content: "Building my first web app."
    },
    {   
        id:uuidv4(),
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

    // WHEN WE ARE CREATEING NEW POST we had to create new id so that 
    let id = uuidv4();

    posts.push({id,username,content});
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


// 4th route 
// implementing PATCH route "/post/:id" to just edit the small data or individual data 
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);

    // brings out the content from req.body 
    let newContent=req.body.content;
    console.log(newContent);

    // update the content 
    let post =posts.find((p)=>id===p.id);
    post.content =newContent;

    // res.send("patch request working");
    res.redirect("/posts");
// sending request from hoppscotch by coping id 
// body {content: i love college },{}
})

// let render edit page 
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> { id===p.id})
    res.render("edit.ejs", {post});
})


app.get("/",(req,res)=>{
    res.send("serving working well");
});

app.listen((port,()=>{
    console.log("app is listiniing to the port : 8080");
}))