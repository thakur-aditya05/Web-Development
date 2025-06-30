// last in first out 
function one(){
    return 1;
}
function  two(){
    return one() + one();
}
function  three(){
    let ans = two() + one();
    console.log(ans);
}


// breakpoints 
// sbkuch dekh skte hai source ke under 
// when ever this code will run 
// broweser ke upper iss call stacks ko kaise debug kr skte hai 


// source -->top--->file:// ---> app.js--> lets add breakpoints by clicking on the number written on left side 
// step over next function, step into next function, 
// call satcks 