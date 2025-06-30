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

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs"); 
})

app.post("/posts",(req,res)=>{

    console.log(req.body);
    let {username, content} = req.body;
let id = uuidv4();

    posts.push({id,username,content});
    res.redirect("/posts"); 
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);

    let post =posts.find((p)=>id===p.id);
    console.log(posts);

    res.render("show.ejs",{ post });

});
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);


    let newContent=req.body.content;
    console.log(newContent);


    let post =posts.find((p)=>id===p.id);
    post.content =newContent;


    res.redirect("/posts");

})

// let render edit page 
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> { id===p.id})
    res.render("edit.ejs", {post});
})



app.delete("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> { id!==p.id});
    res.redirect("/posts");
})




app.get("/",(req,res)=>{
    res.send("serving working well");
});

app.listen((port,()=>{
    console.log("app is listiniing to the port : 8080");
}))



// blogger ke liye best example hai 