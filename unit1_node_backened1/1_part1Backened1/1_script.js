// other uses of node js (runtime enviornment) --
// 1. Web server: Node.js can be used to create web servers that handle HTTP requests and serve web pages.
// 2. Command-line tools: Node.js can be used to create command-line tools that automate tasks or perform specific functions.
// 3. Real-time applications: Node.js is well-suited for building real-time applications, such as chat applications or online gaming.
// 4. Internet of Things (IoT): Node.js can be used to build applications that connect to and control IoT devices.


// -----
// run these lines in terminal
// ls 
// pwd 
// 1+2
// console.log("hello world")
// "a"+"b"+"c"
// -----




// ----------------
// running js in node js


// lets run a simple js file in node js
// 1. create a file called script.js
// 2. write some js code in it
// 3. run the file using node command in terminal from the directory where the file is located
let a = 10;
for (let i = 0; i < a; i++) {
    console.log(i);
}
console.log("hello world");
// 4. "node script.js" in terminal   
// ----------------



// ----------------
// understand  process 

// process
// 1. process is a global object in node js that provides information about the current process
// >>process 
// >>process.versions
// >>process.release
// >>process.cwd
// >>process.argv; return an array of command line ARGUMENTS    
console.log(process.argv);
// >> process.argv[0]; // path to node executable
// >> process.argv[1]; // path of yhe script file 
// >> node script.js hello world 12 13 14 20 // will return an array of command line arguments
// -------------





// ----------------
// understand process.argv
let args=process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("hello world",args[i]);
}
// >>node script.js aditya  singh aman thakur shiva 
// ..........









// ----------------
// this give instances of modularity: Breaking down a large program into smaller, manageable files or modules.

// lets undertsand module.exports-require pair 
// 2_maths.js file is made 
// write some code in it
const someValue=require("./2_maths.js"); // "./" same directory me se 2_maths.js file ko import kiya hai  
console.log(someValue); // 123
// >> node script.js ; returns empty Object or someValue or array of values 

const math=require("./2_maths.js"); // "./" same directory me se 2_maths.js file ko import kiya hai
console.log(math); // { sum: [Function: sum], sub: [Function: sub], mul: [Function: mul] }
console.log(math.sum(2,3)); // 5
// >> node script.js 



// ----------------
// to send data from one file to another file from one directory to another directory
