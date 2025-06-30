// this is using figlet to create a text type writing material 
// >> npm install figlet

// ----------------------------
// lets understand -
// node_modules; 
// package.lock.json; exact records of the packages you have installed
// ----------------------------


// -----------------------
const figlet = require("figlet"); // importing figlet module: issme "./" use knre ki zarurat nahi hai kyuki ye node_modules me hai

figlet("Thakur_aditya_singh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
// >> node 5_figlet.js
// -------------------------



// -------------------------
// lets understand  how to create a package.json file and why dont export node_modules to git or other developers
// and  how to share your project with other developers


// lets understand -
//  package.json; isme humare project ki details hoti hai jaise ki name, version, description, author, license, dependencies, scripts etc.
// if deleted then run this command to create a new one   
// >> npm install : install all the packages in the package.json file


// lets make our own package.json file
        //   >>mkdir myProject
        //   >>cd myProject
        //   >> npm init / npm init -y
        //   npm install figlet ; isski depandencies bhi install ho jayegi 
        //   npm install give-me-a-joke 
// -------------------------

