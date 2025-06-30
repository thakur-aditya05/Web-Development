// to export all the files of "fruits" directory to other file
    //index.js must be file name 
    // import  and combine all the js files of fruits directory here 1st 
    // export finally from here
const apple=require("./1_apple");
const banana=require("./2_banana");
const orange=require("./3_orange");
let fruits=[apple,banana,orange]; // array of objects
module.exports=fruits; // export the array of objects

