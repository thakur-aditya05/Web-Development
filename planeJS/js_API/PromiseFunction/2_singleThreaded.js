// ek time pe ek cheez ki execute hogi and 
// line by line from top to bottom execute hongi 

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b) 
// -----------------------------------------
console.log("hi this is my code")
setTimeout(function(){
    console.log("function will for 2sec");
},2000);
setTimeout(function(){
    console.log("function will for 2sec");
},2000);
console.log("hello");

// js is single threaded but still it will print 10th line and 17th line even it also executed 
// 11 and 14th line and stored its output to browser(which are written in form of c++ or java  ) 
// c++ and java can do multi threading and isski karan ek saath timer complete hone ke baad 2 sec ke turant hi js console me print ho gayi value 
// 


// wiill run instatntly  but get stored in browser 
// setTimeout(function(){
//     console.log("function will for 2sec");
// },2000);

// wait karne ka kaam sirf browser krta hai 
// or uske baad  js wapas written kr deta hai call stack  ke form  me 
// -------------------------------------------------------------------------------------------