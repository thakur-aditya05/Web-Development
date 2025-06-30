const sum=(a,b)=> a+b;
const sub=(a,b)=> a-b;
const mul=(a,b)=> a*b;

// module.exports; ek special object hota hai jo ek file se dusre file me data pass karne ke liye use hota hai same directory me

// 1st time 
module.exports=123; 
// -----------
// 2nd time 
module.exports="hello world"; // string pass kiya hai
// -----------


// -------------
// 3rd time
let obj={
    sum:sum,
    sub:sub,
    mul:mul,
}
module.exports=obj; // string pass kiya hai
// --------------




// 4th time
// we can also use but it is less used 
// module.exports.sum=sum;
// module.exports.sub=sub;
// module.exports.mul=mul: 