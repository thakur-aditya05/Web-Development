// collection of apis ->web server 
// architectural rest ==>restfull api 
// apis ko likhna ka tarika hai 

// apis is used to create crud operations 
// Create-->somthing to add+
// Read 
// Update
// delete

// API referance -index docs twitter 
// recomendede by mam 
// https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
// use noun instead of verb 



// CRUD <----> GET,POST, PUT,PATCH,DELETE
// get -->READ ==>padhna chahte hai 
// post -->create or submit 
// put--> complete update krna ho cheezo ko a-to-z 
// patch -->update data partiallay that is sirf name email ya phone number 
// delete to delete 



// qeura post 
// post create karenge  --> username, and content 
    // view , indiviadual view , edit, delete 
// resource:  jiske upper crud operation perform kr rahe hai 
// resource: 



// creating RESTful APIs 
// GEt /posts , view path, 
// post /posts ,create 
// get /posts/:id , individual view route 
// patch /posts/:id , update route  (we can also use put requests )
// destroy route ---> delete 



// lets start with empty file

// npm init -y
// npm  i express 
// npm i ejs 
// touch index.js { basic code here }
// nodemon index.js
// create view folder  ( for ejs) 
// create public folder (for static files (css VS js ) and )
// .....
// ....
// codes 
// ....
// ...


// lets make our 1st api 
// index route : get     /posts(/resource,/noun  not the /viewpost, /allpost)       to get data for all posts 
// views-> index.ejs
// public-->style.css 



// 2nd api
// create route  to add a new post 
// post  /posts                         to add a new post 
// iiske liye 2 route  banenge         
//         "/posts/new" get    to serve the form 
//         "/posts"  Post     to add the new post      
// ek button rahegi ussko click krne pe ek form khulega uss form ke khulne  ke baad information bhar jayegi and fir se click krne ke baad information auto add ho jayegi 
// "/posts/new" get    to serve the form 
// new.ejs

// redirect 
// res.redirect(url)


// view allposts-->create new post (a)form (b)post requests aayegi backened me --->redirect to view all posts 


