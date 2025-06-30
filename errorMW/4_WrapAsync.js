const { wrap } = require("module");

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err));
    }
}

function asyncWrap(fn){
    return function(){
        fn();
    }
}

const hello=()=>{
    console.log("this function run normally ");
}
hello(); // print this function run normally 
// ------------------------------------
// but
let WrapHello=asyncWrap(hello);
console.log(WrapHello ); // simply printing hello function

// !
// we are caaling the same normal function through wrap function 
// which takes function defination inside it and return again a function 
// this returnable function is resposnsible for running the that function 

function asyncWrap(hello){
    return function(){
        hello();  // will excuted and print console
    }
}
function asyncWrap(hello){
    return function(){
        hello();  // will excuted and print console
    }
}
// ------------------------------------
