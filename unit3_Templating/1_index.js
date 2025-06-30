// to install package.json: npm init -y 
// to intsall express: npm install express ejs
// to intsall ejs: npm install ejs 
// to make file: touch index.js 

//  handlebar --another templates engine



// --------------------
// lets create a simple server using express 
// const express = require("express"); // importing express module
// const app = express(); // creating an instance of express
// const port = 3000; // port number
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`); // starting the server
// }); // listening on port 3000
// >> nodemon 1_index.js
// --------------------






// --------------------
// lets connect  a simple server using express with  ejs
const express = require("express"); // importing express module
const app = express(); // creating an instance of express
const port = 3000; // port number

app.set("view engine", "ejs"); // setting the view engine to ejs 
// deafult view engine ejs ko set kiya ja raha hai, yani render krte smaya view file search kiya jayega and uske under ejs file ko render kiya jayega 
// so make view folder and inside it make index.ejs file


app.get("/", (req, res) => {
  res.render("1_index.ejs"); // rendering the index.ejs file
//res.render by default search for views folder and then index.ejs file in it 
// naam ke basis me search karta hai edentasion se nahi 
}); // when the user visits the home page, render the index.ejs file
// ejs extension ko download karo 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // starting the server
}); // listening on port 3000
// >> nodemon 1_index.js
// --------------------


// -------------------------------------------
// lets understand why we need path module
// path module is used to join the directory names and make it platform independent

// ek probleum hai 
// jab hum localhost:3000 pe jaate hai toh ye index.ejs file ko render karta hai but server ko "1_ejstemplating" ke under se hi chalna padega kyo ki wo view file ko server jaha se chalu hua hai wahi pe search krta hai 
// jb server ko unit3_Templating ke andar se chalu karte hai toh wo view file ko nahi dikh pata hai 

//  unit3_Templating "nodemon 1_ejstemplating/1_index.js to view file be searched in unit3_Templating directory so it will give error" 

const path = require("path"); // importing path module 
app.set("views", path.join(__dirname, "views")); // setting the views folder to the views directory
// path.join(__dirname, "views")--> it means that the views folder is in the same directory as where index.js file is located 
// __dirname is a global variable which gives the current directory name (index.js wali )
// __dirname -->unit3_Templating/1_ejstemplating + /views = current directory name of ejs    
// ---------------------------------------------------




// -------------------------------------
// interplation i.e dynamicness of html 
// https://ejs.co/#docs
// ye nahi shikhna mere ko aat hai 


// -------------------------------------
